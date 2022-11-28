import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ContentRatingCodeEnum {
    Drugs = "drugs",
    Language = "language",
    Nudity = "nudity",
    Safe = "safe",
    Unrated = "unrated",
    Violence = "violence"
}


export class ContentRating extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: ContentRatingCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
