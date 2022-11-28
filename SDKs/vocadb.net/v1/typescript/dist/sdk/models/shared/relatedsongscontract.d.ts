import { SpeakeasyBase } from "../../../internal/utils";
import { SongForApiContract } from "./songforapicontract";
export declare class RelatedSongsContract extends SpeakeasyBase {
    artistMatches?: SongForApiContract[];
    likeMatches?: SongForApiContract[];
    tagMatches?: SongForApiContract[];
}
