import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SongApiGetTopSongsFieldsEnum {
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
export declare enum SongApiGetTopSongsFilterByEnum {
    CreateDate = "CreateDate",
    PublishDate = "PublishDate",
    Popularity = "Popularity"
}
export declare enum SongApiGetTopSongsLanguagePreferenceEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum SongApiGetTopSongsVocalistEnum {
    Nothing = "Nothing",
    Vocaloid = "Vocaloid",
    Utau = "UTAU",
    Other = "Other"
}
export declare class SongApiGetTopSongsQueryParams extends SpeakeasyBase {
    durationHours?: number;
    fields?: SongApiGetTopSongsFieldsEnum;
    filterBy?: SongApiGetTopSongsFilterByEnum;
    languagePreference?: SongApiGetTopSongsLanguagePreferenceEnum;
    maxResults?: number;
    startDate?: Date;
    vocalist?: SongApiGetTopSongsVocalistEnum;
}
export declare class SongApiGetTopSongsRequest extends SpeakeasyBase {
    queryParams: SongApiGetTopSongsQueryParams;
}
export declare class SongApiGetTopSongsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    songForApiContracts?: shared.SongForApiContract[];
    statusCode: number;
}
