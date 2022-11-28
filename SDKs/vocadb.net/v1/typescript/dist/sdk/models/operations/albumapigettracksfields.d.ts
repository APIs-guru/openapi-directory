import { SpeakeasyBase } from "../../../internal/utils";
export declare class AlbumApiGetTracksFieldsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum AlbumApiGetTracksFieldsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class AlbumApiGetTracksFieldsQueryParams extends SpeakeasyBase {
    discNumber?: number;
    field?: string[];
    lang?: AlbumApiGetTracksFieldsLangEnum;
}
export declare class AlbumApiGetTracksFieldsRequest extends SpeakeasyBase {
    pathParams: AlbumApiGetTracksFieldsPathParams;
    queryParams: AlbumApiGetTracksFieldsQueryParams;
}
export declare class AlbumApiGetTracksFieldsResponse extends SpeakeasyBase {
    albumApiGetTracksFields200ApplicationJsonObjects?: Map<string, string>[];
    albumApiGetTracksFields200ApplicationJsonpObjects?: Map<string, string>[];
    albumApiGetTracksFields200TextJsonObjects?: Map<string, string>[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
