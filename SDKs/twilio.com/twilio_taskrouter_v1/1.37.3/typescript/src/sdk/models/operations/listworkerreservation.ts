import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListWorkerReservationServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class ListWorkerReservationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkerSid" })
  workerSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListWorkerReservationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservationStatus" })
  reservationStatus?: shared.WorkerReservationEnumStatusEnum;
}


export class ListWorkerReservationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListWorkerReservationListWorkerReservationResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListWorkerReservationListWorkerReservationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListWorkerReservationListWorkerReservationResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=reservations", elemType: shared.TaskrouterV1WorkspaceWorkerWorkerReservation })
  reservations?: shared.TaskrouterV1WorkspaceWorkerWorkerReservation[];
}


export class ListWorkerReservationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListWorkerReservationPathParams;

  @SpeakeasyMetadata()
  queryParams: ListWorkerReservationQueryParams;

  @SpeakeasyMetadata()
  security: ListWorkerReservationSecurity;
}


export class ListWorkerReservationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listWorkerReservationResponse?: ListWorkerReservationListWorkerReservationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
