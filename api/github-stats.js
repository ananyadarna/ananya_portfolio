export default async function handler(req, res) {
  const username = "ananyadarna";

  try {
    const headers = {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    };

    const [userRes, prsRes, gssocRes, nsocRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(
        `https://api.github.com/search/issues?q=author:${username}+type:pr+is:merged`,
        { headers }
      ),
      fetch(
        `https://api.github.com/search/issues?q=author:${username}+type:pr+is:merged+label:gssoc-approved`,
        { headers }
      ),
      fetch(
        `https://api.github.com/search/issues?q=author:${username}+type:pr+is:merged+label:NSoC26`,
        { headers }
      ),
    ]);

    const user = await userRes.json();
    const prs = await prsRes.json();
    const gssoc = await gssocRes.json();
    const nsoc = await nsocRes.json();

    return res.status(200).json({
      publicRepos: user.public_repos || 0,
      mergedPRs: prs.total_count || 0,
      openSourcePRs:
        (gssoc.total_count || 0) +
        (nsoc.total_count || 0),
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch GitHub stats",
    });
  }
}