  
// import { response } from "express" ;

 function scraper () {
     fetch ("https://api.github.com/repos/BrightNate1022/git_scrap/commits")
    .then (response => response.json())
    // .then (console.log (response))
    .then (data => console.log (data));
}

export default scraper 
//  const data = {};
