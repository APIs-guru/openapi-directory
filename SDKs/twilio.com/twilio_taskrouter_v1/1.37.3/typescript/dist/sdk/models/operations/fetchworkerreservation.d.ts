import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchWorkerReservationServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkerReservationPathParams extends SpeakeasyBase {
    sid: string;
    workerSid: string;
    workspaceSid: string;
}
export declare class FetchWorkerReservationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWorkerReservationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWorkerReservationPathParams;
    security: FetchWorkerReservationSecurity;
}
export declare class FetchWorkerReservationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkerWorkerReservation?: shared.TaskrouterV1WorkspaceWorkerWorkerReservation;
}
