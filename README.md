# 4 Passing Array in as function Argument 

const movieInfo = [
    {
       id : 1,
       name : "Batman",
       ratings : 4,
       publish : 2012
   },
   {
       id : 2,
       name : "idiot",
       ratings : 4,
       publish : 2011
   },
]


function movieDetailsNow(movieInfo){
const movieId = movieInfo[0].id;
const movieName = movieInfo[0].name;
const movieRating = movieInfo[0].ratings;
const moviePublish = movieInfo[0].publish;

const movieInformation  = `My dear love, i hope you are well. today i watched a movie it's id name is '${movieId}' and the name of this movie is '${movieName}'. and it's rating is '${movieRating}'. lastly it was published in '${moviePublish}'. `

return movieInformation;

}


// const movie = movieDetailsNow(movieInfo)
movieDetailsNow(movieInfo)
// console.log(movie)
