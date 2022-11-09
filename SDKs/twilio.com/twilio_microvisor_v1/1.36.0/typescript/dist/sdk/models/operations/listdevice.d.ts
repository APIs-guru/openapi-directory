import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTDEVICE_SERVERS: string[];
export declare class ListDeviceQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListDeviceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListDeviceRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListDeviceQueryParams;
    security: ListDeviceSecurity;
}
export declare class ListDeviceListDeviceResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListDeviceListDeviceResponse extends SpeakeasyBase {
    devices?: shared.MicrovisorV1Device[];
    meta?: ListDeviceListDeviceResponseMeta;
}
export declare class ListDeviceResponse extends SpeakeasyBase {
    contentType: string;
    listDeviceResponse?: ListDeviceListDeviceResponse;
    statusCode: number;
}
