import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AlbumApiGetUserCollectionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum AlbumApiGetUserCollectionsLanguagePreferenceEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class AlbumApiGetUserCollectionsQueryParams extends SpeakeasyBase {
    languagePreference?: AlbumApiGetUserCollectionsLanguagePreferenceEnum;
}
export declare class AlbumApiGetUserCollectionsRequest extends SpeakeasyBase {
    pathParams: AlbumApiGetUserCollectionsPathParams;
    queryParams: AlbumApiGetUserCollectionsQueryParams;
}
export declare class AlbumApiGetUserCollectionsResponse extends SpeakeasyBase {
    albumForUserForApiContracts?: shared.AlbumForUserForApiContract[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
