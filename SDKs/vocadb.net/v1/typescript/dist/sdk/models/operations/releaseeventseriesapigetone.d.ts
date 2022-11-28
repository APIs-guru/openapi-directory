import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReleaseEventSeriesApiGetOnePathParams extends SpeakeasyBase {
    id: number;
}
export declare enum ReleaseEventSeriesApiGetOneFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Description = "Description",
    Events = "Events",
    MainPicture = "MainPicture",
    Names = "Names",
    WebLinks = "WebLinks"
}
export declare enum ReleaseEventSeriesApiGetOneLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class ReleaseEventSeriesApiGetOneQueryParams extends SpeakeasyBase {
    fields?: ReleaseEventSeriesApiGetOneFieldsEnum;
    lang?: ReleaseEventSeriesApiGetOneLangEnum;
}
export declare class ReleaseEventSeriesApiGetOneRequest extends SpeakeasyBase {
    pathParams: ReleaseEventSeriesApiGetOnePathParams;
    queryParams: ReleaseEventSeriesApiGetOneQueryParams;
}
export declare class ReleaseEventSeriesApiGetOneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    releaseEventSeriesForApiContract?: shared.ReleaseEventSeriesForApiContract;
    statusCode: number;
}
