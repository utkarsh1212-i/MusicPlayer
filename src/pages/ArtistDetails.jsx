import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistsDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistsDetailsQuery(artistId);

  if (isFetchingArtistDetails)
    return <Loader title="Loading Your Star's Albums..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader 
      artistId={artistId} 
      artistData={Object.values(artistData)} 
      />

      <RelatedSongs
        data={Object.values(artistData)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        
        // artistId={songData?.artists[0].adamid}
      />
    </div>
  );
};

export default ArtistDetails;
