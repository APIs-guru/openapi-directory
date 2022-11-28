import { SpeakeasyBase } from "../../../internal/utils";
export declare class CabwiseGetQueryParams extends SpeakeasyBase {
    forceXml?: boolean;
    lat: number;
    legacyFormat?: boolean;
    lon: number;
    maxResults?: number;
    name?: string;
    optype?: string;
    radius?: number;
    twentyFourSevenOnly?: boolean;
    wc?: string;
}
export declare class CabwiseGetRequest extends SpeakeasyBase {
    queryParams: CabwiseGetQueryParams;
}
export declare class CabwiseGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
