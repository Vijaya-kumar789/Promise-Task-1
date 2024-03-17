var heading= document.createElement("h1");
heading.innerHTML="Promise Task 1";
var p= document.createElement("p");
p.innerHTML="This is task for fetching the rest Api and displaying the content using promise async and await"
var container=document.createElement("div");
container.className="container";
var row = document.createElement("div");
row.className="row";

async function foo (){
    try{
    var data = await fetch("https://restcountries.com/v3.1/all")
    var result= await data.json()
    console.log(result);
    result.forEach((res)=>{
        
        var col = document.createElement("div");
        col.className= "col-lg-4 col-sm-12 "
       col.innerHTML =` <div class="card" style="width: 18rem;">
      <div class="card-header "><h6>${res.name.common}</h6></div>
      
      
      <div class="card-body">
      <img src="${res.flags.png}" class="card-img-top" alt="...">
        <p class="card-text">Region:${res.region}</p>
        <p class="card-text">Capital:${res.capital}</p>
        <p class="card-text">Population:${res.population}</p>
        <p class="card-text">Native Name:${res.name.nativeName?.eng?.official
        }</p>
        <p class="card-text">Flag:${res.flag}</p>
      
        </div>
    </div>`

    row.appendChild(col);
    })
}
    catch(err){
        console.log('Error');
    }
}

foo()

container.append(row);
document.body.append(heading,p,container);
