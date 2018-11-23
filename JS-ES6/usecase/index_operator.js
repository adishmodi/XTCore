function doSum(val1, val2) {
    return val1+val2;
}

function doSubs(val1, val2) {
    return val1-val2;
}

function doMulti(val1, val2) {
    return val1*val2;
}

function doDivi(val1, val2) {
    return val1/val2;
}

function doCalculation(value1 =0 ,value2 =0, operator="N/A" ){    
    let output;
    if (isValid(value1,value2))
    {
        let floatValue1=parseFloat(value1);
        let floatValue2=parseFloat(value2);
    
        switch(operator){
            case ("+"):
                output= doSum(floatValue1,floatValue2);
                break;
            case ("-"):
                output=doSubs( floatValue1, floatValue2);
                break;
            case ("/"):
                output=doDivi( floatValue1, floatValue2);
                break;
            case ("*"):
                output=doMulti( floatValue1, floatValue2);
                break;
            default:                        
                output=0;        
        }    
        console.log(`Output for ${value1} ${operator} ${value2} is ${output}`);
    }
    
}

function isValid(val1,val2){    
    const numberType='number';

    if (!(typeof(val1)===numberType && typeof(val2)===numberType))
    {
        console.log(`There is some thing wrong with value1 "${val1}" or value2 "${val2}". Plese enter number only.`);                
        return false;
    }

    return true;
}


doCalculation(5,2,'+');
doCalculation(5,2,'-');
doCalculation(5,2,'/');
doCalculation(5,2,'*');
doCalculation();

doCalculation("heras","1","+");