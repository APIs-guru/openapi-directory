import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHTASKRESERVATION_SERVERS: string[];
export declare class FetchTaskReservationPathParams extends SpeakeasyBase {
    sid: string;
    taskSid: string;
    workspaceSid: string;
}
export declare class FetchTaskReservationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTaskReservationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTaskReservationPathParams;
    security: FetchTaskReservationSecurity;
}
export declare class FetchTaskReservationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceTaskTaskReservation?: shared.TaskrouterV1WorkspaceTaskTaskReservation;
}
