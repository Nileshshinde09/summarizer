const HOSTNAME='https://summarizer-backend-8evi.onrender.com';
const BASEURL='http://localhost:3000'
export const getSummerize = async(data) => {
    
    try{
        const url = `https://summarizer-backend-8evi.onrender.com/process_data?input_data=${data}`
        const response = await fetch(url);
        const result = await response.json();
        
        return result
    } 
    catch (error) {
        throw new Error("Error fetching : " + error.message);
    }
    
}

