import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTALPHASENDER_SERVERS = [
	"https://messaging.twilio.com",
];



export class ListAlphaSenderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListAlphaSenderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListAlphaSenderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAlphaSenderRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListAlphaSenderPathParams;

  @Metadata()
  queryParams: ListAlphaSenderQueryParams;

  @Metadata()
  security: ListAlphaSenderSecurity;
}


export class ListAlphaSenderListAlphaSenderResponseMeta extends SpeakeasyBase {
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


export class ListAlphaSenderListAlphaSenderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=alpha_senders", elemType: shared.MessagingV1ServiceAlphaSender })
  alphaSenders?: shared.MessagingV1ServiceAlphaSender[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListAlphaSenderListAlphaSenderResponseMeta;
}


export class ListAlphaSenderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAlphaSenderResponse?: ListAlphaSenderListAlphaSenderResponse;

  @Metadata()
  statusCode: number;
}
