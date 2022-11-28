import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListEventServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class ListEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListEventQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EventType" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Minutes" })
  minutes?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservationSid" })
  reservationSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskQueueSid" })
  taskQueueSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaskSid" })
  taskSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=WorkerSid" })
  workerSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=WorkflowSid" })
  workflowSid?: string;
}


export class ListEventSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEventListEventResponseMeta extends SpeakeasyBase {
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


export class ListEventListEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: shared.TaskrouterV1WorkspaceEvent })
  events?: shared.TaskrouterV1WorkspaceEvent[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListEventListEventResponseMeta;
}


export class ListEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListEventPathParams;

  @SpeakeasyMetadata()
  queryParams: ListEventQueryParams;

  @SpeakeasyMetadata()
  security: ListEventSecurity;
}


export class ListEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listEventResponse?: ListEventListEventResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
