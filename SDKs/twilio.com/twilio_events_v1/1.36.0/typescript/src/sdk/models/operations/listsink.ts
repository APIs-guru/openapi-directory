import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSINK_SERVERS = [
	"https://events.twilio.com",
];



export class ListSinkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=InUse" })
  inUse?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: string;
}


export class ListSinkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSinkRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListSinkQueryParams;

  @Metadata()
  security: ListSinkSecurity;
}


export class ListSinkListSinkResponseMeta extends SpeakeasyBase {
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


export class ListSinkListSinkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSinkListSinkResponseMeta;

  @Metadata({ data: "json, name=sinks", elemType: shared.EventsV1Sink })
  sinks?: shared.EventsV1Sink[];
}


export class ListSinkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSinkResponse?: ListSinkListSinkResponse;

  @Metadata()
  statusCode: number;
}
