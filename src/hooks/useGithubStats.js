import { useState, useEffect } from 'react'

export default function useGithubStats() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    let mounted = true

    async function fetchStats() {
      try {
        const [statsRes, contribRes] = await Promise.all([
          fetch('/api/github-stats'),
          fetch(
            'https://github-contributions-api.jogruber.de/v4/ananyadarna?y=last'
          )
        ])

        const statsData = await statsRes.json()
        const contribData = await contribRes.json()

        const contributions =
          contribData?.total?.lastYear ??
          contribData?.total ??
          '—'

        const githubStats = [
          {
            label: 'Open Source PRs',
            num: statsData.openSourcePRs ?? '—',
            sub: 'GSSoC 2026 + NSoC 2026'
          },
          {
            label: 'PRs Merged',
            num: statsData.mergedPRs ?? '—'
          },
          {
            label: 'Contributions',
            num: contributions
          },
          {
            label: 'Public Repos',
            num: statsData.publicRepos ?? '—'
          }
        ]

        if (mounted) {
          setStats(githubStats)
        }
      } catch (error) {
        console.error('GitHub stats error:', error)

        if (mounted) {
          setStats([
            {
              label: 'Open Source PRs',
              num: '—'
            },
            {
              label: 'PRs Merged',
              num: '—'
            },
            {
              label: 'Contributions',
              num: '—'
            },
            {
              label: 'Public Repos',
              num: '—'
            }
          ])
        }
      }
    }

    fetchStats()

    return () => {
      mounted = false
    }
  }, [])

  return stats
}