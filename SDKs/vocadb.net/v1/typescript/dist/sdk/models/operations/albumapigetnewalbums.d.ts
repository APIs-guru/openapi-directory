import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AlbumApiGetNewAlbumsFieldsEnum {
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
export declare enum AlbumApiGetNewAlbumsLanguagePreferenceEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class AlbumApiGetNewAlbumsQueryParams extends SpeakeasyBase {
    fields?: AlbumApiGetNewAlbumsFieldsEnum;
    languagePreference?: AlbumApiGetNewAlbumsLanguagePreferenceEnum;
}
export declare class AlbumApiGetNewAlbumsRequest extends SpeakeasyBase {
    queryParams: AlbumApiGetNewAlbumsQueryParams;
}
export declare class AlbumApiGetNewAlbumsResponse extends SpeakeasyBase {
    albumForApiContracts?: shared.AlbumForApiContract[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
