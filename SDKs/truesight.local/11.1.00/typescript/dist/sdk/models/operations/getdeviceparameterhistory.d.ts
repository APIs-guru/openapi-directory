import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetDeviceParameterHistoryPathParams extends SpeakeasyBase {
    deviceId: number;
}
export declare class GetDeviceParameterHistoryQueryParams extends SpeakeasyBase {
    from?: number;
    monitorSid?: string;
    monitorType: string;
    parameterName: string;
    to?: number;
}
export declare class GetDeviceParameterHistoryRequest extends SpeakeasyBase {
    pathParams: GetDeviceParameterHistoryPathParams;
    queryParams: GetDeviceParameterHistoryQueryParams;
}
export declare class GetDeviceParameterHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
