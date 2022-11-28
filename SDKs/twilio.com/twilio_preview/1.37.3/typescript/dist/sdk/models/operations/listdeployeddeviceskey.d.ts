import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListDeployedDevicesKeyServerList: readonly ["https://preview.twilio.com"];
export declare class ListDeployedDevicesKeyPathParams extends SpeakeasyBase {
    fleetSid: string;
}
export declare class ListDeployedDevicesKeyQueryParams extends SpeakeasyBase {
    deviceSid?: string;
    pageSize?: number;
}
export declare class ListDeployedDevicesKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListDeployedDevicesKeyListDeployedDevicesKeyResponse extends SpeakeasyBase {
    keys?: shared.PreviewDeployedDevicesFleetKey[];
    meta?: ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta;
}
export declare class ListDeployedDevicesKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListDeployedDevicesKeyPathParams;
    queryParams: ListDeployedDevicesKeyQueryParams;
    security: ListDeployedDevicesKeySecurity;
}
export declare class ListDeployedDevicesKeyResponse extends SpeakeasyBase {
    contentType: string;
    listDeployedDevicesKeyResponse?: ListDeployedDevicesKeyListDeployedDevicesKeyResponse;
    statusCode: number;
}
