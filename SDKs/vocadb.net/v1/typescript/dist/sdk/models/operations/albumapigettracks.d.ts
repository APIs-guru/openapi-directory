import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AlbumApiGetTracksPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum AlbumApiGetTracksFieldsEnum {
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
export declare enum AlbumApiGetTracksLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class AlbumApiGetTracksQueryParams extends SpeakeasyBase {
    fields?: AlbumApiGetTracksFieldsEnum;
    lang?: AlbumApiGetTracksLangEnum;
}
export declare class AlbumApiGetTracksRequest extends SpeakeasyBase {
    pathParams: AlbumApiGetTracksPathParams;
    queryParams: AlbumApiGetTracksQueryParams;
}
export declare class AlbumApiGetTracksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    songInAlbumForApiContracts?: shared.SongInAlbumForApiContract[];
    statusCode: number;
}
