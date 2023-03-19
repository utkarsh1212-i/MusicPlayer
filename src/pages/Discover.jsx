import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useDispatch, useSelector } from "react-redux";

import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { selectGenreListId } from "../redux/features/playerSlice";

const Discover = () => {
  const dispatch = useDispatch();
  const {activeSong , isPlaying, genreListId } = useSelector((state) => state.player);


  const { data, isFetching, error } = useGetTopChartsQuery(genreListId || 'POP');

  const genreTitle = genres.find(({value}) => value === genreListId)?.title;

  console.log(data, "DATA:::::");
  if (isFetching) return <Loader title="Loading Your songs..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      {/* Genre select section  */}
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || "Pop"}
          className="bg-black  text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      {/* Song cards start */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks.map((song, i) => (
          <SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong ={activeSong} i={i} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
