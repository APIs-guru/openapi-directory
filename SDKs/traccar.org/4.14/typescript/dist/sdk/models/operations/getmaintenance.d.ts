import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMaintenanceQueryParams extends SpeakeasyBase {
    all?: boolean;
    deviceId?: number;
    groupId?: number;
    refresh?: boolean;
    userId?: number;
}
export declare class GetMaintenanceRequest extends SpeakeasyBase {
    queryParams: GetMaintenanceQueryParams;
}
export declare class GetMaintenanceResponse extends SpeakeasyBase {
    contentType: string;
    maintenances?: shared.Maintenance[];
    statusCode: number;
}
