export const githubInfoLoader= async()=>{
const res = await fetch('https://api.github.com/users/bhartisharma01');
return res.json()
}