import Link from "next/link";

export default async function ProjectComponent({ image, github }) {

  async function getRepoData(github) {
    const splitted = github.split("/");    
    const total = splitted.length;

    const response = await fetch(`https://api.github.com/repos/${splitted[total-2]}/${splitted[total-1]}`);
    if (!response.ok) {
      console.log("Response from github:", response.status);
      console.log(await response.json());
      
      return null;
    }
    
    return await response.json();
  }
  
  const repoData = await getRepoData(github);
  if (!repoData) return <div className="border p-4 rounded-lg">Loading...</div>;

  const description = repoData.description 
    ? (repoData.description.length > 250 
        ? repoData.description.slice(0, 250) + "..." 
        : repoData.description)
    : "No description available";


  return (
    <div className="
      flex flex-col sm:flex-row gap-4 items-center
      border p-4 rounded-lg
    ">
      
      <img src={image} alt="Repo Icon" className="w-16 h-16 rounded-full" />
      
      <div>
        
        <Link 
          href={repoData.html_url} 
          target="_blank" rel="noopener noreferrer" 
          className="flex text-xl font-bold text-red-600"
        >
          <code>{repoData.full_name}</code>
        </Link>

        <p className="text-gray-300 text-left">
          {description}
        </p>
        
        <div className="flex text-sm text-gray-500">
          <code>
            Stars: {repoData.stargazers_count}  |  Forks: {repoData.forks_count}  |  Issues: {repoData.open_issues_count}
          </code>
        </div>

      </div>
    </div>
  );
}