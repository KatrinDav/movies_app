import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import Card from './components/Card/Card';
import Loader from './components/Loader/Loader';


const MOVIES_URL = 'https://movies-recom-app-default-rtdb.europe-west1.firebasedatabase.app/movies.json';
const CHOICES_URL = 'https://movies-recom-app-default-rtdb.europe-west1.firebasedatabase.app/choices.json';

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();


  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(MOVIES_URL);

      if (!response.ok) {
        throw new Error('Something went wrong!')
        ;
      }

      const data = await response.json();

      let loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          imageURL: data[key].imageURL,
          summary: data[key].summary,
          rating: data[key].rating
        })
      }
      setMoviesData(loadedMovies)

      setIsLoading(false);
    }

    fetchMovies().catch((err) => {
      setIsLoading(false);
      setError(err.message)
    })


  }, []);


  const remove = (id) => {
    const updatedData = moviesData.filter(item => item.id !== id);
    setMoviesData(updatedData);
  }


  const reject = (id) => {
    fetch(CHOICES_URL, {
      method: 'POST',
      body: JSON.stringify({
        movieId: id,
        isAccepted: false,
      })
    })

    remove(id)

  }

  const accept = (id) => {
    fetch(CHOICES_URL, {
      method: 'POST',
      body: JSON.stringify({
        movieId: id,
        isAccepted: true,
      })
    });

  }


  if (error) {
    return (
      <section className={styles.error}>
        <p>{error}</p>
      </section>
    )
  }


  return (
    <>
      <Header />
      {isLoading && <Loader />}
      <div className={styles.wrapper}>
        {moviesData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            summary={item.summary}
            img={item.imageURL}
            rating={item.rating}
            rejectFn={reject}
            acceptFn={accept} />
        ))}
      </div>
    </>

  );
}

export default App;
