import { SpeakeasyBase } from "../../../internal/utils";
export declare class PlaceGetAtPathParams extends SpeakeasyBase {
    lat: string;
    lon: string;
    type: string[];
}
export declare class PlaceGetAtQueryParams extends SpeakeasyBase {
    lat: string;
    locationLat: number;
    locationLon: number;
    lon: string;
}
export declare class PlaceGetAtRequest extends SpeakeasyBase {
    pathParams: PlaceGetAtPathParams;
    queryParams: PlaceGetAtQueryParams;
}
export declare class PlaceGetAtResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
