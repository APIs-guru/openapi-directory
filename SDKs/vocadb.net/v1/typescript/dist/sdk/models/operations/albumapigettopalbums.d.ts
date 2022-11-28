import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AlbumApiGetTopAlbumsFieldsEnum {
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
export declare enum AlbumApiGetTopAlbumsLanguagePreferenceEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class AlbumApiGetTopAlbumsQueryParams extends SpeakeasyBase {
    fields?: AlbumApiGetTopAlbumsFieldsEnum;
    ignoreIds?: number[];
    languagePreference?: AlbumApiGetTopAlbumsLanguagePreferenceEnum;
}
export declare class AlbumApiGetTopAlbumsRequest extends SpeakeasyBase {
    queryParams: AlbumApiGetTopAlbumsQueryParams;
}
export declare class AlbumApiGetTopAlbumsResponse extends SpeakeasyBase {
    albumForApiContracts?: shared.AlbumForApiContract[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
