import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AlbumApiGetOnePathParams extends SpeakeasyBase {
    id: number;
}
export declare enum AlbumApiGetOneFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Artists = "Artists",
    Description = "Description",
    Discs = "Discs",
    Identifiers = "Identifiers",
    MainPicture = "MainPicture",
    Names = "Names",
    PVs = "PVs",
    ReleaseEvent = "ReleaseEvent",
    Tags = "Tags",
    Tracks = "Tracks",
    WebLinks = "WebLinks"
}
export declare enum AlbumApiGetOneLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum AlbumApiGetOneSongFieldsEnum {
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
export declare class AlbumApiGetOneQueryParams extends SpeakeasyBase {
    fields?: AlbumApiGetOneFieldsEnum;
    lang?: AlbumApiGetOneLangEnum;
    songFields?: AlbumApiGetOneSongFieldsEnum;
}
export declare class AlbumApiGetOneRequest extends SpeakeasyBase {
    pathParams: AlbumApiGetOnePathParams;
    queryParams: AlbumApiGetOneQueryParams;
}
export declare class AlbumApiGetOneResponse extends SpeakeasyBase {
    albumForApiContract?: shared.AlbumForApiContract;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
