const GITHUB_CONTRIBUTIONS_QUERY = `
  query($userName:String!) {
    user(login: $userName){
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              color
            }
          }
        }
      }
    }
  }
`;

export async function getGitHubContributions() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME || "19Kushagra0";

  if (!token) {
    return { calendar: null, raw: null, error: "GitHub token not found" };
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GITHUB_CONTRIBUTIONS_QUERY,
        variables: { userName: username },
      }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`);
    }

    const raw = await response.json();
    const calendar =
      raw?.data?.user?.contributionsCollection?.contributionCalendar ?? null;

    if (!calendar) {
      return { calendar: null, raw, error: "Failed to parse GitHub data" };
    }

    return { calendar, raw, error: null };
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return {
      calendar: null,
      raw: null,
      error: "Failed to fetch GitHub contributions",
    };
  }
}

