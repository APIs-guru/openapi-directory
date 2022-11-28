import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SongApiGetHighlightedSongsFieldsEnum {
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
export declare enum SongApiGetHighlightedSongsLanguagePreferenceEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class SongApiGetHighlightedSongsQueryParams extends SpeakeasyBase {
    fields?: SongApiGetHighlightedSongsFieldsEnum;
    languagePreference?: SongApiGetHighlightedSongsLanguagePreferenceEnum;
}
export declare class SongApiGetHighlightedSongsRequest extends SpeakeasyBase {
    queryParams: SongApiGetHighlightedSongsQueryParams;
}
export declare class SongApiGetHighlightedSongsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    songForApiContracts?: shared.SongForApiContract[];
    statusCode: number;
}
