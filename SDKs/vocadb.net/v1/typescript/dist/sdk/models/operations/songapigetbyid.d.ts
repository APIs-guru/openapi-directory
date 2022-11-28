import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SongApiGetByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum SongApiGetByIdFieldsEnum {
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
export declare enum SongApiGetByIdLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class SongApiGetByIdQueryParams extends SpeakeasyBase {
    fields?: SongApiGetByIdFieldsEnum;
    lang?: SongApiGetByIdLangEnum;
}
export declare class SongApiGetByIdRequest extends SpeakeasyBase {
    pathParams: SongApiGetByIdPathParams;
    queryParams: SongApiGetByIdQueryParams;
}
export declare class SongApiGetByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    songForApiContract?: shared.SongForApiContract;
    statusCode: number;
}
