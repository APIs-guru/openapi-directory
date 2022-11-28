import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReleaseEventApiGetOnePathParams extends SpeakeasyBase {
    id: number;
}
export declare enum ReleaseEventApiGetOneFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Artists = "Artists",
    Description = "Description",
    MainPicture = "MainPicture",
    Names = "Names",
    Series = "Series",
    SongList = "SongList",
    Tags = "Tags",
    Venue = "Venue",
    WebLinks = "WebLinks"
}
export declare enum ReleaseEventApiGetOneLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class ReleaseEventApiGetOneQueryParams extends SpeakeasyBase {
    fields?: ReleaseEventApiGetOneFieldsEnum;
    lang?: ReleaseEventApiGetOneLangEnum;
}
export declare class ReleaseEventApiGetOneRequest extends SpeakeasyBase {
    pathParams: ReleaseEventApiGetOnePathParams;
    queryParams: ReleaseEventApiGetOneQueryParams;
}
export declare class ReleaseEventApiGetOneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    releaseEventForApiContract?: shared.ReleaseEventForApiContract;
    statusCode: number;
}
