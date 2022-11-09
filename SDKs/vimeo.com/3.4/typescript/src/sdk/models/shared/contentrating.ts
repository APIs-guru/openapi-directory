import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ContentRatingCodeEnum {
    Drugs = "drugs"
,    Language = "language"
,    Nudity = "nudity"
,    Safe = "safe"
,    Unrated = "unrated"
,    Violence = "violence"
}


export class ContentRating extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: ContentRatingCodeEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}
