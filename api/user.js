import fetch from "isomorphic-fetch";

export function fetchPopularRepos(language = "all") {
  const encodedURI = encodeURI(
    `https://api.github.com/search/repositories?q=stars:>70000+language:${language}&sort=stars&order=desc&type=Repositories&limit=20`
  );

  return fetch(encodedURI)
    .then(data => data.json())
    .then(repos => {
      return repos.items;
    })
    .catch(error => {
      return null;
    });
}
