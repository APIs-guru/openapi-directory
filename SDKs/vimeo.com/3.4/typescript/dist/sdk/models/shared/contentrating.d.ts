import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContentRatingCodeEnum {
    Drugs = "drugs",
    Language = "language",
    Nudity = "nudity",
    Safe = "safe",
    Unrated = "unrated",
    Violence = "violence"
}
export declare class ContentRating extends SpeakeasyBase {
    code: ContentRatingCodeEnum;
    name: string;
    uri: string;
}
