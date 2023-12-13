// code your solution here
const saturdayFun=(activity='roller-skate')=>{
    return `This Saturday, I want to ${activity}!`
}
saturdayFun('roller-skate')

const mondayWork=(activity='go to the office')=>{
return `This Monday, I will ${activity}.`
}

function wrapAdjective(weight= "*"){
    return function(params='special'){
        return `You are ${weight}${params}${weight}!`
    }
    
}
wrapAdjective("100%")("special")