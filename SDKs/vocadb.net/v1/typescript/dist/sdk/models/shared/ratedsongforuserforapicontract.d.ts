import { SpeakeasyBase } from "../../../internal/utils";
import { SongForApiContract } from "./songforapicontract";
import { UserForApiContract } from "./userforapicontract";
export declare enum RatedSongForUserForApiContractRatingEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}
export declare class RatedSongForUserForApiContract extends SpeakeasyBase {
    date?: Date;
    rating?: RatedSongForUserForApiContractRatingEnum;
    song?: SongForApiContract;
    user?: UserForApiContract;
}
