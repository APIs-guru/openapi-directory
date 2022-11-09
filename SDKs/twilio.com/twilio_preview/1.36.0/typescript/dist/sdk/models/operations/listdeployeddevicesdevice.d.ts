import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTDEPLOYEDDEVICESDEVICE_SERVERS: string[];
export declare class ListDeployedDevicesDevicePathParams extends SpeakeasyBase {
    fleetSid: string;
}
export declare class ListDeployedDevicesDeviceQueryParams extends SpeakeasyBase {
    deploymentSid?: string;
    pageSize?: number;
}
export declare class ListDeployedDevicesDeviceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListDeployedDevicesDeviceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListDeployedDevicesDevicePathParams;
    queryParams: ListDeployedDevicesDeviceQueryParams;
    security: ListDeployedDevicesDeviceSecurity;
}
export declare class ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse extends SpeakeasyBase {
    devices?: shared.PreviewDeployedDevicesFleetDevice[];
    meta?: ListDeployedDevicesDeviceListDeployedDevicesDeviceResponseMeta;
}
export declare class ListDeployedDevicesDeviceResponse extends SpeakeasyBase {
    contentType: string;
    listDeployedDevicesDeviceResponse?: ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse;
    statusCode: number;
}
