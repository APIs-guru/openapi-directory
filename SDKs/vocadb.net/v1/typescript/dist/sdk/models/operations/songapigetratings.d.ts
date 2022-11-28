import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SongApiGetRatingsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum SongApiGetRatingsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum SongApiGetRatingsUserFieldsEnum {
    None = "None",
    KnownLanguages = "KnownLanguages",
    MainPicture = "MainPicture",
    OldUsernames = "OldUsernames"
}
export declare class SongApiGetRatingsQueryParams extends SpeakeasyBase {
    lang?: SongApiGetRatingsLangEnum;
    userFields: SongApiGetRatingsUserFieldsEnum;
}
export declare class SongApiGetRatingsRequest extends SpeakeasyBase {
    pathParams: SongApiGetRatingsPathParams;
    queryParams: SongApiGetRatingsQueryParams;
}
export declare class SongApiGetRatingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    ratedSongForUserForApiContracts?: shared.RatedSongForUserForApiContract[];
    statusCode: number;
}
