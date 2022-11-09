import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSESSION_SERVERS = [
	"https://proxy.twilio.com",
];



export class ListSessionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListSessionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSessionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSessionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSessionPathParams;

  @Metadata()
  queryParams: ListSessionQueryParams;

  @Metadata()
  security: ListSessionSecurity;
}


export class ListSessionListSessionResponseMeta extends SpeakeasyBase {
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


export class ListSessionListSessionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSessionListSessionResponseMeta;

  @Metadata({ data: "json, name=sessions", elemType: shared.ProxyV1ServiceSession })
  sessions?: shared.ProxyV1ServiceSession[];
}


export class ListSessionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSessionResponse?: ListSessionListSessionResponse;

  @Metadata()
  statusCode: number;
}
