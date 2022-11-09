import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTWORKERRESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class ListWorkerReservationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkerSid" })
  workerSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListWorkerReservationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReservationStatus" })
  reservationStatus?: shared.WorkerReservationEnumStatusEnum;
}


export class ListWorkerReservationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListWorkerReservationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListWorkerReservationPathParams;

  @Metadata()
  queryParams: ListWorkerReservationQueryParams;

  @Metadata()
  security: ListWorkerReservationSecurity;
}


export class ListWorkerReservationListWorkerReservationResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListWorkerReservationListWorkerReservationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListWorkerReservationListWorkerReservationResponseMeta;

  @Metadata({ data: "json, name=reservations", elemType: shared.TaskrouterV1WorkspaceWorkerWorkerReservation })
  reservations?: shared.TaskrouterV1WorkspaceWorkerWorkerReservation[];
}


export class ListWorkerReservationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listWorkerReservationResponse?: ListWorkerReservationListWorkerReservationResponse;

  @Metadata()
  statusCode: number;
}
