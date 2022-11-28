import { SpeakeasyBase } from "../../../internal/utils";
import { SongForApiContract } from "./songforapicontract";
export declare class SongInAlbumForApiContract extends SpeakeasyBase {
    discNumber?: number;
    id?: number;
    name?: string;
    song?: SongForApiContract;
    trackNumber?: number;
}
