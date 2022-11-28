import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SongApiGetDerivedPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum SongApiGetDerivedFieldsEnum {
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
export declare enum SongApiGetDerivedLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class SongApiGetDerivedQueryParams extends SpeakeasyBase {
    fields?: SongApiGetDerivedFieldsEnum;
    lang?: SongApiGetDerivedLangEnum;
}
export declare class SongApiGetDerivedRequest extends SpeakeasyBase {
    pathParams: SongApiGetDerivedPathParams;
    queryParams: SongApiGetDerivedQueryParams;
}
export declare class SongApiGetDerivedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    songForApiContracts?: shared.SongForApiContract[];
    statusCode: number;
}
