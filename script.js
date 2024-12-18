let movies = [
  {
    id: 1,
    name: "Forsaj",
    ganre: "Boyevik",
    rating: 8,
    year: 2012,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9eqUT2wkPdJaGxzJlQ5HVYT4_olBZ3udySw&s",
  },
  {
    id: 2,
    name: "Harry Boter",
    ganre: "Fantastic",
    rating: 9.5,
    year: 2014,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT807WsLZUfetO9ZkzrYbqHIhMkZ_PT0BprMg&s",
  },
  {
    id: 2,
    name: "Harry Boter",
    ganre: "Fantastic",
    rating: 9.5,
    year: 2014,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT807WsLZUfetO9ZkzrYbqHIhMkZ_PT0BprMg&s",
  },
  {
    id: 2,
    name: "Harry Boter",
    ganre: "Fantastic",
    rating: 9.5,
    year: 2014,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT807WsLZUfetO9ZkzrYbqHIhMkZ_PT0BprMg&s",
  },
  {
    id: 2,
    name: "Harry Boter",
    ganre: "Fantastic",
    rating: 9.5,
    year: 2014,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT807WsLZUfetO9ZkzrYbqHIhMkZ_PT0BprMg&s",
  },
  {
    id: 2,
    name: "Harry Boter",
    ganre: "Fantastic",
    rating: 9.5,
    year: 2014,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT807WsLZUfetO9ZkzrYbqHIhMkZ_PT0BprMg&s",
  },
  {
    id: 2,
    name: "Harry Boter",
    ganre: "Fantastic",
    rating: 9.5,
    year: 2014,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT807WsLZUfetO9ZkzrYbqHIhMkZ_PT0BprMg&s",
  },
  {
    id: 2,
    name: "Harry Boter",
    ganre: "Fantastic",
    rating: 9.5,
    year: 2014,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT807WsLZUfetO9ZkzrYbqHIhMkZ_PT0BprMg&s",
  },
  {
    id: 2,
    name: "Harry Boter",
    ganre: "Fantastic",
    rating: 9.5,
    year: 2014,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT807WsLZUfetO9ZkzrYbqHIhMkZ_PT0BprMg&s",
  },
  {
    id: 2,
    name: "Harry Boter",
    ganre: "Fantastic",
    rating: 9.5,
    year: 2014,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT807WsLZUfetO9ZkzrYbqHIhMkZ_PT0BprMg&s",
  },
  {
    id: 2,
    name: "Harry Boter",
    ganre: "Fantastic",
    rating: 9.5,
    year: 2014,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT807WsLZUfetO9ZkzrYbqHIhMkZ_PT0BprMg&s",
  },
  {
    id: 2,
    name: "Harry Boter",
    ganre: "Fantastic",
    rating: 9.5,
    year: 2014,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT807WsLZUfetO9ZkzrYbqHIhMkZ_PT0BprMg&s",
  },
  {
    id: 2,
    name: "Harry Boter",
    ganre: "Fantastic",
    rating: 9.5,
    year: 2014,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT807WsLZUfetO9ZkzrYbqHIhMkZ_PT0BprMg&s",
  },
  {
    id: 3,
    name: "Taxi",
    ganre: "Comedy",
    rating: 8.5,
    year: 2010,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAFsQfXYZzTV7GKy-TcKC9U5P0u3B6FZBFFw&s",
  },
  {
    id: 4,
    name: "Boyka",
    ganre: "Boyevik",
    rating: 9.5,
    year: 2019,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Dk-8LegvBmPoIwpSkJuAY4UGfiXgo_edyw&s",
  },
];
let inp = document.querySelector("#bir");
let cards = document.querySelector(".cards");

function displayMovies(data) {
  let newData = "";
  data.forEach((product) => {
    newData += `
      <img src=${product.url} alt="">
      <h3>${product.name}</h3>
      <p>${product.ganre}</p> 
      `;
  });
  cards.innerHTML = newData;
}
displayMovies(movies);

const searchMovies = (value) => {
  console.log(value);
  const filteredMovies = movies.filter(
    (movie) =>
      movie.name.toLowerCase().includes(value.toLowerCase()) ||
      movie.year == inp
  );
  displayMovies(filteredMovies);
};

inp.addEventListener("input", (e) => {
  let value = e.target.value.trim();
  searchMovies(value);
});

function sortMovies() {
  let select = document.getElementById("item").value;

  console.log(select);

  let sortedMovie = [...movies];

  switch (select) {
    case "name":
      sortedMovie.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name2":
      sortedMovie.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "reting":
      sortedMovie.sort((a, b) => b.rating - a.rating);
      break;
    case "new":
      sortedMovie.sort((a, b) => a.year - b.year);
      break;
    case "new":
      sortedMovie.sort((a, b) => b.year - a.year);
      break;
  }
  displayMovies(sortedMovie);
}

sortMovies();

let inp2 = document.querySelector("#inp2");

inp2.addEventListener("input", (e) => {
  let value = e.target.value;
  let newMovies = movies.slice(value);
  displayMovies(newMovies);
});
