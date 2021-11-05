export const required = (value: string)=>{
    if (value) return undefined
    return 'Field is required'
}
//function with params
export const maxLenght50 = (value: string)=> {
    if (value && value.length > 50) return 'Max length is 50 symbols'

    return undefined
}

// universal function
export const maxLenghtCreator = (maxLenght: number)=> {
    return (value: string)=> {
        if (value && value.length > maxLenght) return `Max length is ${maxLenght} symbols`

        return undefined
    }
}