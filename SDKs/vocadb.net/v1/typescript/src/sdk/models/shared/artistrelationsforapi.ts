import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlbumForApiContract } from "./albumforapicontract";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
import { SongForApiContract } from "./songforapicontract";
import { AlbumForApiContract } from "./albumforapicontract";
import { SongForApiContract } from "./songforapicontract";


export class ArtistRelationsForApi extends SpeakeasyBase {
  @Metadata({ data: "json, name=latestAlbums", elemType: shared.AlbumForApiContract })
  latestAlbums?: AlbumForApiContract[];

  @Metadata({ data: "json, name=latestEvents", elemType: shared.ReleaseEventForApiContract })
  latestEvents?: ReleaseEventForApiContract[];

  @Metadata({ data: "json, name=latestSongs", elemType: shared.SongForApiContract })
  latestSongs?: SongForApiContract[];

  @Metadata({ data: "json, name=popularAlbums", elemType: shared.AlbumForApiContract })
  popularAlbums?: AlbumForApiContract[];

  @Metadata({ data: "json, name=popularSongs", elemType: shared.SongForApiContract })
  popularSongs?: SongForApiContract[];
}
