import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTEVENTTYPE_SERVERS = [
	"https://events.twilio.com",
];



export class ListEventTypeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SchemaId" })
  schemaId?: string;
}


export class ListEventTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEventTypeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListEventTypeQueryParams;

  @Metadata()
  security: ListEventTypeSecurity;
}


export class ListEventTypeListEventTypeResponseMeta extends SpeakeasyBase {
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


export class ListEventTypeListEventTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListEventTypeListEventTypeResponseMeta;

  @Metadata({ data: "json, name=types", elemType: shared.EventsV1EventType })
  types?: shared.EventsV1EventType[];
}


export class ListEventTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listEventTypeResponse?: ListEventTypeListEventTypeResponse;

  @Metadata()
  statusCode: number;
}
