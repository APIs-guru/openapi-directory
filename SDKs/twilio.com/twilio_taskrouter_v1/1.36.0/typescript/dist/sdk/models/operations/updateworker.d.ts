import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEWORKER_SERVERS: string[];
export declare class UpdateWorkerPathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class UpdateWorkerHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class UpdateWorkerUpdateWorkerRequest extends SpeakeasyBase {
    activitySid?: string;
    attributes?: string;
    friendlyName?: string;
    rejectPendingReservations?: boolean;
}
export declare class UpdateWorkerSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateWorkerRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateWorkerPathParams;
    headers: UpdateWorkerHeaders;
    request?: UpdateWorkerUpdateWorkerRequest;
    security: UpdateWorkerSecurity;
}
export declare class UpdateWorkerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorker?: shared.TaskrouterV1WorkspaceWorker;
}
