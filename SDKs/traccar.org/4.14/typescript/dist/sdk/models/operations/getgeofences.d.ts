import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGeofencesQueryParams extends SpeakeasyBase {
    all?: boolean;
    deviceId?: number;
    groupId?: number;
    refresh?: boolean;
    userId?: number;
}
export declare class GetGeofencesRequest extends SpeakeasyBase {
    queryParams: GetGeofencesQueryParams;
}
export declare class GetGeofencesResponse extends SpeakeasyBase {
    contentType: string;
    geofences?: shared.Geofence[];
    statusCode: number;
}
