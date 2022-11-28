import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReleaseEventApiGetPublishedSongsPathParams extends SpeakeasyBase {
    eventId: number;
}
export declare enum ReleaseEventApiGetPublishedSongsFieldsEnum {
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
export declare enum ReleaseEventApiGetPublishedSongsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class ReleaseEventApiGetPublishedSongsQueryParams extends SpeakeasyBase {
    fields?: ReleaseEventApiGetPublishedSongsFieldsEnum;
    lang?: ReleaseEventApiGetPublishedSongsLangEnum;
}
export declare class ReleaseEventApiGetPublishedSongsRequest extends SpeakeasyBase {
    pathParams: ReleaseEventApiGetPublishedSongsPathParams;
    queryParams: ReleaseEventApiGetPublishedSongsQueryParams;
}
export declare class ReleaseEventApiGetPublishedSongsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    songForApiContracts?: shared.SongForApiContract[];
    statusCode: number;
}
