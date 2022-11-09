import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SongRatingContractRatingEnum {
    Nothing = "Nothing"
,    Dislike = "Dislike"
,    Like = "Like"
,    Favorite = "Favorite"
}


export class SongRatingContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=rating, form, name=rating;" })
  rating?: SongRatingContractRatingEnum;
}
