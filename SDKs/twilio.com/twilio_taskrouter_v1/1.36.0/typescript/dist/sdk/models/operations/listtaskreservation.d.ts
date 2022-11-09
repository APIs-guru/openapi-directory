import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTTASKRESERVATION_SERVERS: string[];
export declare class ListTaskReservationPathParams extends SpeakeasyBase {
    taskSid: string;
    workspaceSid: string;
}
export declare class ListTaskReservationQueryParams extends SpeakeasyBase {
    pageSize?: number;
    reservationStatus?: shared.TaskReservationEnumStatusEnum;
}
export declare class ListTaskReservationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListTaskReservationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListTaskReservationPathParams;
    queryParams: ListTaskReservationQueryParams;
    security: ListTaskReservationSecurity;
}
export declare class ListTaskReservationListTaskReservationResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListTaskReservationListTaskReservationResponse extends SpeakeasyBase {
    meta?: ListTaskReservationListTaskReservationResponseMeta;
    reservations?: shared.TaskrouterV1WorkspaceTaskTaskReservation[];
}
export declare class ListTaskReservationResponse extends SpeakeasyBase {
    contentType: string;
    listTaskReservationResponse?: ListTaskReservationListTaskReservationResponse;
    statusCode: number;
}
