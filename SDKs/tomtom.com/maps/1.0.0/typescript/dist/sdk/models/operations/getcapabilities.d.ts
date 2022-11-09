import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetCapabilitiesPathParams extends SpeakeasyBase {
    versionNumber: number;
}
export declare enum GetCapabilitiesRequestEnum {
    GetCapabilities = "GetCapabilities"
}
export declare enum GetCapabilitiesServiceEnum {
    Wms = "WMS"
}
export declare enum GetCapabilitiesVersionEnum {
    One11 = "1.1.1"
}
export declare class GetCapabilitiesQueryParams extends SpeakeasyBase {
    request: GetCapabilitiesRequestEnum;
    service: GetCapabilitiesServiceEnum;
    version?: GetCapabilitiesVersionEnum;
}
export declare class GetCapabilitiesRequest extends SpeakeasyBase {
    pathParams: GetCapabilitiesPathParams;
    queryParams: GetCapabilitiesQueryParams;
}
export declare class GetCapabilitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
