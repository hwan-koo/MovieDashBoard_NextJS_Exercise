import { API_URL } from "../app/(home)/page";
import styles from "../styles/similar-movie.module.css";

async function getSimlarVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function SimliarMovie({ id }: { id: string }) {
  const videos = await getSimlarVideos(id);
  console.log(videos.poster_path);
  return (
    <div>
      <div className={styles.title}>비슷한 영화들</div>
      <div className={styles.container}>
        {videos.map((video) => (
          <div className={styles.movie}>
            <img src={video.poster_path} />
            <div>{video.title} </div>
          </div>
        ))}
      </div>
    </div>
  );
}
