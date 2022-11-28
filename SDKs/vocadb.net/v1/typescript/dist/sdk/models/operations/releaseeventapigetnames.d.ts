import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReleaseEventApiGetNamesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    query?: string;
}
export declare class ReleaseEventApiGetNamesRequest extends SpeakeasyBase {
    queryParams: ReleaseEventApiGetNamesQueryParams;
}
export declare class ReleaseEventApiGetNamesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    releaseEventApiGetNames200ApplicationJsonStrings?: string[];
    releaseEventApiGetNames200ApplicationJsonpStrings?: string[];
    releaseEventApiGetNames200TextJsonStrings?: string[];
    statusCode: number;
}
