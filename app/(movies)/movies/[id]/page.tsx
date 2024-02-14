import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-viedos";
import SimliarMovie from "../../../../components/similar-movie";

interface Iparams {
  params: { id: string };
}

// Dynamic Metadata
export async function generateMetadata({ params: { id } }: Iparams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: Iparams) {
  return (
    <div>
      <Suspense fallback={<h1>영화 정보 로딩중</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>트레일러 정보 로딩중</h1>}>
        <MovieVideos id={id} />
      </Suspense>
      <Suspense fallback={<h1>비슷한 영화 정보 로딩중</h1>}>
        <SimliarMovie id={id} />
      </Suspense>
    </div>
  );
}
