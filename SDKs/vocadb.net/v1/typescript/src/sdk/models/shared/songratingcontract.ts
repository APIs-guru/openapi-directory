import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SongRatingContractRatingEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}


export class SongRatingContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rating, form, name=rating;" })
  rating?: SongRatingContractRatingEnum;
}
