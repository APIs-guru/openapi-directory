import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTEVENT_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class ListEventPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class ListEventQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EventType" })
  eventType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Minutes" })
  minutes?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReservationSid" })
  reservationSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Sid" })
  sid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaskChannel" })
  taskChannel?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaskQueueSid" })
  taskQueueSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaskSid" })
  taskSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=WorkerSid" })
  workerSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=WorkflowSid" })
  workflowSid?: string;
}


export class ListEventSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEventRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListEventPathParams;

  @Metadata()
  queryParams: ListEventQueryParams;

  @Metadata()
  security: ListEventSecurity;
}


export class ListEventListEventResponseMeta extends SpeakeasyBase {
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


export class ListEventListEventResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=events", elemType: shared.TaskrouterV1WorkspaceEvent })
  events?: shared.TaskrouterV1WorkspaceEvent[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListEventListEventResponseMeta;
}


export class ListEventResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listEventResponse?: ListEventListEventResponse;

  @Metadata()
  statusCode: number;
}
