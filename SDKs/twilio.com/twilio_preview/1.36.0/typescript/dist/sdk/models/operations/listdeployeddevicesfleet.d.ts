import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTDEPLOYEDDEVICESFLEET_SERVERS: string[];
export declare class ListDeployedDevicesFleetQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListDeployedDevicesFleetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListDeployedDevicesFleetRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListDeployedDevicesFleetQueryParams;
    security: ListDeployedDevicesFleetSecurity;
}
export declare class ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListDeployedDevicesFleetListDeployedDevicesFleetResponse extends SpeakeasyBase {
    fleets?: shared.PreviewDeployedDevicesFleet[];
    meta?: ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta;
}
export declare class ListDeployedDevicesFleetResponse extends SpeakeasyBase {
    contentType: string;
    listDeployedDevicesFleetResponse?: ListDeployedDevicesFleetListDeployedDevicesFleetResponse;
    statusCode: number;
}
