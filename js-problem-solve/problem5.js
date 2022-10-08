//Array থেকে falsy value কিভাবে খুজে বের করে বাদ দিতে পারি??

const mixedarr = [
    "arman",undefined,"vsCode",false,"","apple",40,true,"thank",NaN
];

const truearr = mixedarr.filter(function(value){
    if(value){
        return true;
    }else{
        return false;
    }
})

console.log(truearr)



//simple way...

/*
const mixedarr = [
    "arman",undefined,"vsCode",false,"","apple",40,true,"thank",NaN
];

const truearr = mixedarr.filter(Boolean)
console.log(truearr);
*/
