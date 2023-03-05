const sum  = require("./sum").sum;
import { sum2 } from "./sum2";
import { style } from './css/index.scss';
import Icon from "./assets/img/proba.png";

console.log("Hello World");
console.log(sum(2,3));
console.log(sum2(2,3));

fetch("https://raw.githubusercontent.com/olcolcolc/LookUp/main/endpoints/destinations.json") //jsona trzeba wrzucic  na githuba i wejsc w niego a potem kliknac raw i wkleic linka
    .then((res) => res.json()) // Transform the data into text
    .then((data) => {
        data.destinations.forEach(element =>{
            console.log(element)
        })
})
.catch((err) => console.log(err));

