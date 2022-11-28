import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReleaseEventApiGetAlbumsPathParams extends SpeakeasyBase {
    eventId: number;
}
export declare enum ReleaseEventApiGetAlbumsFieldsEnum {
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
export declare enum ReleaseEventApiGetAlbumsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class ReleaseEventApiGetAlbumsQueryParams extends SpeakeasyBase {
    fields?: ReleaseEventApiGetAlbumsFieldsEnum;
    lang?: ReleaseEventApiGetAlbumsLangEnum;
}
export declare class ReleaseEventApiGetAlbumsRequest extends SpeakeasyBase {
    pathParams: ReleaseEventApiGetAlbumsPathParams;
    queryParams: ReleaseEventApiGetAlbumsQueryParams;
}
export declare class ReleaseEventApiGetAlbumsResponse extends SpeakeasyBase {
    albumForApiContracts?: shared.AlbumForApiContract[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
