import express, { json } from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { dirname } from "path";
import * as path from 'path';
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/" , async(req,res)=>{
  res.render("index2.ejs");
});

app.get("/random", async(req,res)=>{
  try{
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    res.render("random.ejs",{
      cocktails: result.data.drinks,
      Length: result.data.drinks.length,
    });
  }
  catch(error){
    res.render("randon.ejs",{
      error : error.message,
    });
  }
});

app.post("/random", async(req,res)=>{
  try{
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    res.render("random.ejs",{
      cocktails: result.data.drinks,
      Length: result.data.drinks.length,
    });
  }
  catch(error){
    res.render("randon.ejs",{
      error : error.message,
    });
  }
});

app.get("/cocktail_name", async(req,res)=>{
  res.render("cocktailName.ejs");
});

app.post("/cocktail_name", (req,res)=>{
  res.render("cocktailName.ejs");
});

app.post("/cocktail_name_result",async(req,res)=>{
  try{
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+req.body.cocktailrequested);

    res.render("cocktailNameResult.ejs",{
      cocktails: result.data.drinks,
      Length: result.data.drinks.length,
    });

  }
  catch(error){
    res.render("cocktailNameResult.ejs",{
      error: error.message,
    });
  }
});


// Cocktail by first letter
app.get("/by_first_letter", (req,res)=>{
  res.render("FirstLetter.ejs");
});

app.post("/by_first_letter", (req,res)=>{
  res.render("FirstLetter.ejs");
});

app.post("/First_Letter_result",async(req,res)=>{
  try{
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f="+req.body.cocktailrequested);
    res.render("cocktailFirstLetterResult.ejs",{
      cocktails: result.data.drinks,
      Length: result.data.drinks.length,
    });
  }
  catch(error){
    res.render("cocktailFirstLetterResult.ejs",{
      error: error.message,
    });
  }
});

app.get("/ingredient_name", (req,res)=>{
  res.render("ingredientName.ejs");
});

app.post("/ingredient_name", (req,res)=>{
  res.render("ingredientName.ejs");
});



app.post("/ingredient_name_result",async(req,res)=>{
  try{
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+req.body.cocktailrequested);
    res.render("cocktailIngredientResult.ejs",{
      cocktails: result.data.drinks,
      Length: result.data.drinks.length,
    });

  }
  catch(error){
    res.render("cocktailIngredientResult.ejs",{
      error:error.message,
    });
  }
});



app.get("/getcocktail/:name", async(req,res)=>{
  var name = req.params.name;
  try{
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+name);

    res.render("yourcocktail.ejs",{
      cocktails: result.data.drinks,
    });
  }
  catch(error){
    res.render("yourcocktail.ejs",{
      error: error.message,
    });
  }
});



app.get("/ingredient_list", async(req,res)=>{
  try{
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
    
    res.render("ingredientList.ejs",{
      cocktails: result.data.drinks,
      Length: result.data.drinks.length,
    });

  }
  catch(error){
    res.render("ingredientList.ejs",{
      error:error.message,
    });
  }
});
app.get("/ingredient_name_result2/:name",async(req,res)=>{
  try{
    var cocktailrequested = req.params.name;
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+cocktailrequested);
    res.render("cocktailIngredientResult.ejs",{
      cocktails: result.data.drinks,
      Length: result.data.drinks.length,
    });
  }
  catch(error){
    res.render("cocktailIngredientResult.ejs",{
      error: error.message,
    });
  }
});


app.post("/ingredient_list", async(req,res)=>{
  try{
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
    res.render("ingredientList.ejs",{
      cocktails: result.data.drinks,
      Length: result.data.drinks.length,
    });

  }
  catch(error){
    res.render("ingredientList.ejs",{
      error: error.message,
    });
  }
});

app.get("/alcohol", async(req,res)=>{
  try{
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");
    res.render("alcohol.ejs",{
      cocktails: result.data.drinks,
      Length: result.data.drinks.length,
    });
  }
  catch(error){
    res.render("alcohol.ejs",{
      error: error.message,
    });
  }
});

app.post("/alcohol", async(req,res)=>{
  try{
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");
    res.render("alcohol.ejs",{
      cocktails: result.data.drinks,
      Length: result.data.drinks.length,
    });
  }
  catch(error){
    res.render("alcohol.ejs",{
      error: error.message,
    });
  }
});

app.get("/noalcohol", async(req,res)=>{
  try{
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
    res.render("noalcohol.ejs",{
      cocktails: result.data.drinks,
      Length: result.data.drinks.length,
    });
  }
  catch(error){
    res.render("noalcohol.ejs",{
      error: error.message,
    });
  }
});

app.post("/noalcohol", async(req,res)=>{
  try{
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
    res.render("noalcohol.ejs",{
      cocktails: result.data.drinks,
      Length: result.data.drinks.length,
    });
  }
  catch(error){
    res.render("noalcohol.ejs",{
      error: error.message,
    });
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });