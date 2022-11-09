import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTWORKERRESERVATION_SERVERS: string[];
export declare class ListWorkerReservationPathParams extends SpeakeasyBase {
    workerSid: string;
    workspaceSid: string;
}
export declare class ListWorkerReservationQueryParams extends SpeakeasyBase {
    pageSize?: number;
    reservationStatus?: shared.WorkerReservationEnumStatusEnum;
}
export declare class ListWorkerReservationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListWorkerReservationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListWorkerReservationPathParams;
    queryParams: ListWorkerReservationQueryParams;
    security: ListWorkerReservationSecurity;
}
export declare class ListWorkerReservationListWorkerReservationResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListWorkerReservationListWorkerReservationResponse extends SpeakeasyBase {
    meta?: ListWorkerReservationListWorkerReservationResponseMeta;
    reservations?: shared.TaskrouterV1WorkspaceWorkerWorkerReservation[];
}
export declare class ListWorkerReservationResponse extends SpeakeasyBase {
    contentType: string;
    listWorkerReservationResponse?: ListWorkerReservationListWorkerReservationResponse;
    statusCode: number;
}
