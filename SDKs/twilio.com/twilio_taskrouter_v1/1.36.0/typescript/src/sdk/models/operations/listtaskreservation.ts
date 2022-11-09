import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTTASKRESERVATION_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class ListTaskReservationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListTaskReservationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReservationStatus" })
  reservationStatus?: shared.TaskReservationEnumStatusEnum;
}


export class ListTaskReservationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTaskReservationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListTaskReservationPathParams;

  @Metadata()
  queryParams: ListTaskReservationQueryParams;

  @Metadata()
  security: ListTaskReservationSecurity;
}


export class ListTaskReservationListTaskReservationResponseMeta extends SpeakeasyBase {
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


export class ListTaskReservationListTaskReservationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListTaskReservationListTaskReservationResponseMeta;

  @Metadata({ data: "json, name=reservations", elemType: shared.TaskrouterV1WorkspaceTaskTaskReservation })
  reservations?: shared.TaskrouterV1WorkspaceTaskTaskReservation[];
}


export class ListTaskReservationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTaskReservationResponse?: ListTaskReservationListTaskReservationResponse;

  @Metadata()
  statusCode: number;
}
