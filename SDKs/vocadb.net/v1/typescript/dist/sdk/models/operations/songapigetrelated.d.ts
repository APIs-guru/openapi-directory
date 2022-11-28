import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SongApiGetRelatedPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum SongApiGetRelatedFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Albums = "Albums",
    Artists = "Artists",
    Lyrics = "Lyrics",
    MainPicture = "MainPicture",
    Names = "Names",
    PVs = "PVs",
    ReleaseEvent = "ReleaseEvent",
    Tags = "Tags",
    ThumbUrl = "ThumbUrl",
    WebLinks = "WebLinks"
}
export declare enum SongApiGetRelatedLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class SongApiGetRelatedQueryParams extends SpeakeasyBase {
    fields?: SongApiGetRelatedFieldsEnum;
    lang?: SongApiGetRelatedLangEnum;
}
export declare class SongApiGetRelatedRequest extends SpeakeasyBase {
    pathParams: SongApiGetRelatedPathParams;
    queryParams: SongApiGetRelatedQueryParams;
}
export declare class SongApiGetRelatedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    relatedSongsContract?: shared.RelatedSongsContract;
    statusCode: number;
}
