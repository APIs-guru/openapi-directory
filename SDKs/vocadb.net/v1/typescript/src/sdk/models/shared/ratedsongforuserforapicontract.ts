import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SongForApiContract } from "./songforapicontract";
import { UserForApiContract } from "./userforapicontract";

export enum RatedSongForUserForApiContractRatingEnum {
    Nothing = "Nothing"
,    Dislike = "Dislike"
,    Like = "Like"
,    Favorite = "Favorite"
}


export class RatedSongForUserForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=rating" })
  rating?: RatedSongForUserForApiContractRatingEnum;

  @Metadata({ data: "json, name=song" })
  song?: SongForApiContract;

  @Metadata({ data: "json, name=user" })
  user?: UserForApiContract;
}
