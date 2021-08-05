
//"Abc" -> "cbA"

function reverse(){
    let str= "Abc";
    str=str.split("").reverse().join("");
    console.log(str);
}

reverse();

// reverse sentense

function reverseSentense(){
     let s = "My name is kamlesh";
     str= s.split(" ").reverse().join(" ");
     console.log(str);
}

reverseSentense();