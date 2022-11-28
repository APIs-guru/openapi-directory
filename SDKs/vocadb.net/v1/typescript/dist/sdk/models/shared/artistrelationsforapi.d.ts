import { SpeakeasyBase } from "../../../internal/utils";
import { AlbumForApiContract } from "./albumforapicontract";
import { ReleaseEventForApiContract } from "./releaseeventforapicontract";
import { SongForApiContract } from "./songforapicontract";
export declare class ArtistRelationsForApi extends SpeakeasyBase {
    latestAlbums?: AlbumForApiContract[];
    latestEvents?: ReleaseEventForApiContract[];
    latestSongs?: SongForApiContract[];
    popularAlbums?: AlbumForApiContract[];
    popularSongs?: SongForApiContract[];
}
