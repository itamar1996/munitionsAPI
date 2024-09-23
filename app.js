import { v4 } from 'uuid';

let arr =[]
let wepone = {
    id:v4(),
    type :"m16",
    status:false,
    active:true
}
arr.push(wepone)

const retwepones = ()=>{
    return arr
}
console.log(arr);
export{
    retwepones
}