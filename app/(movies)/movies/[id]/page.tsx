import { Suspense } from "react";
import { URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-viedos";

async function getMovie(id: string) {
  const response = await fetch(`${URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  const response = await fetch(`${URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
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
