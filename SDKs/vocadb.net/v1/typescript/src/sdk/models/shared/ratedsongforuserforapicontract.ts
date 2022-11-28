import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SongForApiContract } from "./songforapicontract";
import { UserForApiContract } from "./userforapicontract";


export enum RatedSongForUserForApiContractRatingEnum {
    Nothing = "Nothing",
    Dislike = "Dislike",
    Like = "Like",
    Favorite = "Favorite"
}


export class RatedSongForUserForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: RatedSongForUserForApiContractRatingEnum;

  @SpeakeasyMetadata({ data: "json, name=song" })
  song?: SongForApiContract;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserForApiContract;
}
