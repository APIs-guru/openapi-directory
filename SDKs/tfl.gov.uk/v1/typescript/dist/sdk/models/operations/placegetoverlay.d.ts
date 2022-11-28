import { SpeakeasyBase } from "../../../internal/utils";
export declare class PlaceGetOverlayPathParams extends SpeakeasyBase {
    lat: string;
    lon: string;
    height: number;
    type: string[];
    width: number;
    z: number;
}
export declare class PlaceGetOverlayQueryParams extends SpeakeasyBase {
    lat: string;
    locationLat: number;
    locationLon: number;
    lon: string;
}
export declare class PlaceGetOverlayRequest extends SpeakeasyBase {
    pathParams: PlaceGetOverlayPathParams;
    queryParams: PlaceGetOverlayQueryParams;
}
export declare class PlaceGetOverlayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
