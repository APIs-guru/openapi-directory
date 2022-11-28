import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ReleaseEventSeriesApiGetListFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Description = "Description",
    Events = "Events",
    MainPicture = "MainPicture",
    Names = "Names",
    WebLinks = "WebLinks"
}
export declare enum ReleaseEventSeriesApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum ReleaseEventSeriesApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare class ReleaseEventSeriesApiGetListQueryParams extends SpeakeasyBase {
    fields?: ReleaseEventSeriesApiGetListFieldsEnum;
    getTotalCount?: boolean;
    lang?: ReleaseEventSeriesApiGetListLangEnum;
    maxResults?: number;
    nameMatchMode?: ReleaseEventSeriesApiGetListNameMatchModeEnum;
    query?: string;
    start?: number;
}
export declare class ReleaseEventSeriesApiGetListRequest extends SpeakeasyBase {
    queryParams: ReleaseEventSeriesApiGetListQueryParams;
}
export declare class ReleaseEventSeriesApiGetListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultReleaseEventSeriesForApiContract?: shared.PartialFindResultReleaseEventSeriesForApiContract;
    statusCode: number;
}
