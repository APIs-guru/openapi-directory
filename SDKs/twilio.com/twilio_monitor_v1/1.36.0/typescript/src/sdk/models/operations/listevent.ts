import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTEVENT_SERVERS = [
	"https://monitor.twilio.com",
];



export class ListEventQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ActorSid" })
  actorSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EventType" })
  eventType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ResourceSid" })
  resourceSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceIpAddress" })
  sourceIpAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;
}


export class ListEventSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEventRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

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
  @Metadata({ data: "json, name=events", elemType: shared.MonitorV1Event })
  events?: shared.MonitorV1Event[];

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
