import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SongRatingContractRatingEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}
export declare class SongRatingContract extends SpeakeasyBase {
    rating?: SongRatingContractRatingEnum;
}
