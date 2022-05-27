export function pushedAt () {
    
    // const PushedScraper = []
     fetch ("https://api.github.com/repos/BrightNate1022/git_scrap/commits")
    .then (response => response.json())
    // .then (response => console.log (response))
    .then ( data =>console.log(data))  
    
    // .then (data => console.log(data.commits_url))
    
    // console.log(PushedScraper)
    
}