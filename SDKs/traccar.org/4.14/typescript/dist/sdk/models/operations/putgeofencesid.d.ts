import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutGeofencesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutGeofencesIdRequest extends SpeakeasyBase {
    pathParams: PutGeofencesIdPathParams;
    request: shared.Geofence;
}
export declare class PutGeofencesIdResponse extends SpeakeasyBase {
    contentType: string;
    geofence?: shared.Geofence;
    statusCode: number;
}
