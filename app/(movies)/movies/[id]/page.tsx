import { Suspense } from "react";
import { URL } from "../../../(home)/page";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-viedos";

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
      <Suspense fallback={<h1>로딩중 정보</h1>}>
        <MovieInfo id={id} />
      </Suspense>{" "}
      <Suspense fallback={<h1>로딩중 동영상</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
