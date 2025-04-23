 

export const getLaunches = async  () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();

    const numbers = [1,2,3,4,5,6]

    
    return {
        data,
        numbers
    }
}

