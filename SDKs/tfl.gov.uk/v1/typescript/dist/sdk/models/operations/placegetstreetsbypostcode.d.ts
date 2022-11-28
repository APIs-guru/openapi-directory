import { SpeakeasyBase } from "../../../internal/utils";
export declare class PlaceGetStreetsByPostCodePathParams extends SpeakeasyBase {
    postcode: string;
}
export declare class PlaceGetStreetsByPostCodeQueryParams extends SpeakeasyBase {
    postcode: string;
    postcodeInputPostcode?: string;
}
export declare class PlaceGetStreetsByPostCodeRequest extends SpeakeasyBase {
    pathParams: PlaceGetStreetsByPostCodePathParams;
    queryParams: PlaceGetStreetsByPostCodeQueryParams;
}
export declare class PlaceGetStreetsByPostCodeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
