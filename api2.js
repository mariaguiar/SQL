var express = require("express");
var app = express();
var bodyParser = require ('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    database: "imbd",
    user: "root",
    password: null
});

connection.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('Conexion correcta.')
    }
    });




//endpoint professionals:


app.get("/professionals",  function (request, response)
{
   const sql = 'SELECT * FROM professionals';
    
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send(results);
        }
    }
   );

})

app.get("/professionals/:id",  function (request, response)
{
    const {id} = request.params 
    const sql = `SELECT * FROM professionals WHERE professional_id = ${id}`;
  
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send(results);
        }
    }
   );

})


app.post("/professionals", function(request, response)
{ 
      const sql = 'INSERT INTO professionals SET ?';

      const profesional = 
      {
        name: request.body.name,
        age: request.body.age,
        genre: request.body.genre,
        weight: request.body.weight,
        height: request.body.height,
        hair_color: request.body.hair_color,
        eye_color: request.body.eye_color,
        race: request.body.race,
        retired: request.body.retired,
        nacionality: request.body.nacionality,
        oscars: request.body.oscars,
        proffesion: request.body.proffesion,
        
      };
  
   connection.query(sql, profesional, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send("Profesional creado!");
            console.log(results);
        }
    }
   );

})


app.put("/professionals", function(request, response)
{ 
    
    const {professional_id, name, age, genre, weight, height, hair_color, eye_color, race, retired, nacionality, oscars, proffesion} = request.body;
    
    const sql = `UPDATE professionals SET name = '${name}', age = '${age}', 
    genre = '${genre}', weight = '${weight}', height = '${height}', hair_color = '${hair_color}', eye_color = '${eye_color}', 
    race = '${race}', retired = '${retired}', nacionality = '${nacionality}', oscars = '${oscars}', proffesion = '${proffesion}' 
    WHERE professional_id = ${professional_id}`;

      
 
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send("Profesional actualizado!");
        }
    }
   );

})


app.delete("/professionals/:id", function(request, response)
{ 
    const {id} = request.params;
        
    const sql = `DELETE FROM professionals WHERE professional_id = ${id}`;

      
 
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send("Profesional eliminado!");
        }
    }
   );

})



//endpoint producers:


app.get("/producers",  function (request, response)
{
   const sql = 'SELECT * FROM producers';
    
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send(results);
        }
    }
   );

})

app.get("/producers/:id",  function (request, response)
{
    const {id} = request.params 
    const sql = `SELECT * FROM producers WHERE producer_id = ${id}`;
  
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send(results);
        }
    }
   );

})


app.post("/producers", function(request, response)
{ 
      const sql = 'INSERT INTO producers SET ?';

      const productora = 
      {
        producer_id: request.body.producer_id,
        name: request.body.name,
        creation_year: request.body.creation_year,
        country: request.body.country,
                
      };
  
   connection.query(sql, productora, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send("Productora creada!");
        }
    }
   );

})


app.put("/producers/:id", function(request, response)
{ 
    const {id} = request.params;
    const {producer_id, name, creation_year, country} = request.body;
    
    const sql = `UPDATE producers SET producer_id = '${producer_id}', name = '${name}', creation_year = '${creation_year}', 
    country = '${country}' WHERE producer_id = ${id}`;

      
 
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send("Productora actualizada!");
        }
    }
   );

})


app.delete("/producers/:id", function(request, response)
{ 
    const {id} = request.params;
        
    const sql = `DELETE FROM producers WHERE producer_id = ${id}`;

      
 
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send("Productora eliminada!");
        }
    }
   );

})


//endpoint movies:


app.get("/movies",  function (request, response)
{
   const sql = 'SELECT * FROM movies';
    
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send(results);
        }
    }
   );

})

app.get("/movies/:id",  function (request, response)
{
    const {id} = request.params 
    const sql = `SELECT * FROM movies WHERE movie_id = ${id}`;
  
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send(results);
        }
    }
   );

})


app.post("/movies", function(request, response)
{ 
      const sql = 'INSERT INTO movies SET ?';

      const pelicula = 
      {
        movie_id: request.body.movie_id,
        title: request.body.title,
        release_year: request.body.release_year,
        nacionality: request.body.nacionality,
        language: request.body.language,
        platform: request.body.platform,
        MCU: request.body.MCU,
        main_character: request.body.main_character,
        distributor: request.body.distributor,
        producer_id: request.body.producer_id,
                
      };
  
   connection.query(sql, pelicula, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send("Pelicula creada!");
        }
    }
   );

})


app.put("/movies/:id", function(request, response)
{ 
    const {id} = request.params;
    const {movie_id, title, release_year, nacionality, language, platform, MCU, main_character, distributor, producer_id} = request.body;
    
    const sql = `UPDATE movies SET movie_id = '${movie_id}', title = '${title}', release_year = '${release_year}', 
    nacionality = '${nacionality}', language = '${language}', platform = '${platform}', MCU = '${MCU}', main_character = '${main_character}', 
    distributor = '${distributor}', producer_id = '${producer_id}' WHERE movie_id = ${id}`;

      
 
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send("Pelicula actualizada!");
        }
    }
   );

})


app.delete("/movies/:id", function(request, response)
{ 
    const {id} = request.params;
        
    const sql = `DELETE FROM movies WHERE movie_id = ${id}`;

      
 
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send("Pelicula eliminada!");
        }
    }
   );

})



// Otros endpoints:

// actores de la peli(id)

app.get("/movies/:id/actores",  function (request, response)
{
    const {id} = request.params 
    const sql = `SELECT * FROM professionals INNER JOIN movie_prof ON (professionals.professional_id = movie_prof.professional_id) WHERE movie_prof.movie_id = ${id} AND professionals.proffesion = "actor"`;
  
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send(results);
        }
    }
   );

})

// Guionistas de la peli(id)

app.get("/movies/:id/guionistas",  function (request, response)
{
    const {id} = request.params 
    const sql = `SELECT * FROM professionals INNER JOIN movie_prof ON (professionals.professional_id = movie_prof.professional_id) WHERE movie_prof.movie_id = ${id} AND professionals.proffesion = "writer"`;
  
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send(results);
        }
    }
   );

})


// Guionistas de la peli(id)

app.get("/movies/:id/directores",  function (request, response)
{
    const {id} = request.params 
    const sql = `SELECT * FROM professionals INNER JOIN movie_prof ON (professionals.professional_id = movie_prof.professional_id) WHERE movie_prof.movie_id = ${id} AND professionals.proffesion = "director"`;
  
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send(results);
        }
    }
   );

})


// Productoras de la peli(id)

app.get("/movies/:id/productora",  function (request, response)
{ 
    const {id} = request.params 
    const sql = `SELECT * FROM producers INNER JOIN movie ON (producers.producer_id = movie.producer_id) WHERE movie.movie_id = ${id}`;
  
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send(results);
        }
    }
   );

})


  // añadir profesional(actor, writer, director) a pelis x id

     
    app.post("/movies/:id/professionals", function(request, response)
    { 
      const sql = 'INSERT INTO professionals SET ?';

      const profesional = 
      {
        name: request.body.name,
        age: request.body.age,
        genre: request.body.genre,
        weight: request.body.weight,
        height: request.body.height,
        hair_color: request.body.hair_color,
        eye_color: request.body.eye_color,
        race: request.body.race,
        retired: request.body.retired,
        nacionality: request.body.nacionality,
        oscars: request.body.oscars,
        proffesion: request.body.proffesion,
        
      };

  
      connection.query(sql, profesional, function(error, results)
      {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
                            
            const nuevoId = results.insertId;
            console.log(nuevoId);

            const sql2 = 'INSERT INTO movie_prof SET ?'
            const MovieProf = 
                {
                   movie_id: request.params.id,
                   professional_id: nuevoId
                };
                
            connection.query(sql2, MovieProf, function(error, results)
                {
                     
                     if(error)
                     {
                         response.send(error);
                     }
                     else
                     {
                        response.send("Movie_profesional creado!");
                     }
                })
            
          

        }

    });
       
    });



//eliminar profesional (writer, director,  actor) de pelicula x id

app.delete("/movies/:id/actores/:id2", function(request, response)
{ 
    const {id} = request.params;
    const {id2} = request.params;
        
    const sql = `DELETE FROM movie_prof WHERE professional_id = ${id2} AND movie_id = ${id}`;

      
 
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send("Profesional eliminado de pelicula!");
        }
    }
   );

})






    app.listen(2000);