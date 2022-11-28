import { SpeakeasyBase } from "../../../internal/utils";
export declare class TagApiGetNamesQueryParams extends SpeakeasyBase {
    allowAliases?: boolean;
    maxResults?: number;
    query?: string;
}
export declare class TagApiGetNamesRequest extends SpeakeasyBase {
    queryParams: TagApiGetNamesQueryParams;
}
export declare class TagApiGetNamesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tagApiGetNames200ApplicationJsonStrings?: string[];
    tagApiGetNames200ApplicationJsonpStrings?: string[];
    tagApiGetNames200TextJsonStrings?: string[];
}
