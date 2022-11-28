import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlbumForApiContract } from "./albumforapicontract";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
import { SongForApiContract } from "./songforapicontract";



export class ArtistRelationsForApi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latestAlbums", elemType: AlbumForApiContract })
  latestAlbums?: AlbumForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=latestEvents", elemType: ReleaseEventForApiContract })
  latestEvents?: ReleaseEventForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=latestSongs", elemType: SongForApiContract })
  latestSongs?: SongForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=popularAlbums", elemType: AlbumForApiContract })
  popularAlbums?: AlbumForApiContract[];

  @SpeakeasyMetadata({ data: "json, name=popularSongs", elemType: SongForApiContract })
  popularSongs?: SongForApiContract[];
}
