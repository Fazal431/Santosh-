body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #0d0d0d;
  color: #fff;
}

header {
  text-align: center;
  padding: 20px;
  background: linear-gradient(90deg, #4a148c, #6a1b9a);
}

h1 {
  margin: 0;
  font-size: 2rem;
  letter-spacing: 1px;
}

#searchInput {
  margin-top: 10px;
  padding: 10px;
  width: 80%;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
}

#movieContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 15px;
  padding: 20px;
}

.movie-card {
  background-color: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  transition: 0.3s;
  cursor: pointer;
}

.movie-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #6a1b9a;
}

.movie-card img {
  width: 100%;
  height: 320px;
  object-fit: cover;
}

.movie-info {
  padding: 12px;
}

footer {
  text-align: center;
  padding: 10px;
  background: #111;
  font-size: 0.9rem;
  color: #aaa;
}