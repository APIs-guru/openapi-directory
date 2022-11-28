import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListDeployedDevicesDeploymentServerList: readonly ["https://preview.twilio.com"];
export declare class ListDeployedDevicesDeploymentPathParams extends SpeakeasyBase {
    fleetSid: string;
}
export declare class ListDeployedDevicesDeploymentQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListDeployedDevicesDeploymentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse extends SpeakeasyBase {
    deployments?: shared.PreviewDeployedDevicesFleetDeployment[];
    meta?: ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta;
}
export declare class ListDeployedDevicesDeploymentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListDeployedDevicesDeploymentPathParams;
    queryParams: ListDeployedDevicesDeploymentQueryParams;
    security: ListDeployedDevicesDeploymentSecurity;
}
export declare class ListDeployedDevicesDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    listDeployedDevicesDeploymentResponse?: ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse;
    statusCode: number;
}
