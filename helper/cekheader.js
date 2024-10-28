export function isHeaderTrue(headerTrue, headerCek){
    let hasil = true
    for(let value of headerCek){
        if(headerTrue.includes(value)){
            hasil = true
        }
        else{
            hasil = false
            return hasil
            break
        }
    }

    return hasil
}

export function isHeaderLengthTrue(header, length){
    if(header.length === length){
        return true
    }
    else{
        return false
    }
}