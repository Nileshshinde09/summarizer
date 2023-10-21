const HOSTNAME='http://127.0.0.1:5000';
const BASEURL='http://localhost:3000'
export const getSummerize = async(data) => {
    
    try{
        const url = `${HOSTNAME}/process_data?input_data=${data}`
        const response = await fetch(url);
        const result = await response.json();
        
        return result
    } 
    catch (error) {
        throw new Error("Error fetching : " + error.message);
    }
    
}

