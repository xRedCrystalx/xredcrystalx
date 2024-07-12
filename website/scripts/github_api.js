async function getRepoInfo(repo) {
    const url = `https://api.github.com/repos/xRedCrystalx/${repo}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching repository information: ${response.statusText}`);
        }
        
        const repoData = await response.json();
        
        return {
            name: repoData.name,
            description: repoData.description,
            stars: repoData.stargazers_count,
            forks: repoData.forks_count,
            openIssues: repoData.open_issues_count,
            watchers: repoData.watchers_count,
        };
    } catch (error) {
        console.error(`Failed to fetch repository information: ${error.message}`);
    }
}

// Function to display repository information
async function displayRepoInfo(repo, elementId) {
    const repoInfo = await getRepoInfo(repo);
    
    if (repoInfo) {
        const repoElement = document.getElementById(elementId);
        repoElement.innerHTML = `
            <h1><a href='https://github.com/xRedCrystalx/${repo}'>${repoInfo.name}</a></h1>
            <br>
            <p>${repoInfo.description.length <= 250 ? repoInfo.description : repoInfo.description.substring(0, 250) + "..."}</p>
            <br>
            <p><i class="fa-solid fa-star"></i> Stars: ${repoInfo.stars}</p>
            <p><i class="fa-solid fa-code-fork"></i> Forks: ${repoInfo.forks}</p>
            <p><i class="fa-solid fa-bug"></i> Issues: ${repoInfo.openIssues}</p>
            <p><i class="fa-solid fa-eye"></i> Watchers: ${repoInfo.watchers}</p>
        `;
    }
}

// load all repos
document.addEventListener("DOMContentLoaded", () => {
    if (typeof repos !== "undefined") {
        repos.forEach(repo => displayRepoInfo(repo.repo, repo.elementId));
    }
});
