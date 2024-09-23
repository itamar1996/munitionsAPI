import { v4 } from 'uuid';
import fs from 'fs/promises';
const retwepones = async () => {
    const data = await fs.readFile('./Data.json', 'utf8');
    // console.log(data);
    
    return JSON.parse(data); 
}

const retweponesByID = async (id) => {
    const data = await retwepones();
    return data.some(item => item.id === id); 
}

export{
    retweponesByID,
    retwepones
}