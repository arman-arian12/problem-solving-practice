//object থেকে falsy value কিভাবে খুজে বের করে বাদ দিতে পারি??

const obj = {
   a: "arman",
   b:  undefined,
   c: "vsCode",
   d: false,
   e:"",
   f: "apple",
   g: 40,
   h: "thank",
   i: NaN,
   j: true
};

const trueobj = function(obj){
    for(let i in obj){
        if(!obj[i]){
            delete obj[i]
        }
    }
    return obj;
}

console.log(trueobj(obj));


