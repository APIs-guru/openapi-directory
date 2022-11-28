import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGeofencesRequest extends SpeakeasyBase {
    request: shared.Geofence;
}
export declare class PostGeofencesResponse extends SpeakeasyBase {
    contentType: string;
    geofence?: shared.Geofence;
    statusCode: number;
}
