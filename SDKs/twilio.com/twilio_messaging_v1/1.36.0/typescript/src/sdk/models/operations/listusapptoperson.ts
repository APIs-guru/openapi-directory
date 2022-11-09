import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUSAPPTOPERSON_SERVERS = [
	"https://messaging.twilio.com",
];



export class ListUsAppToPersonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=MessagingServiceSid" })
  messagingServiceSid: string;
}


export class ListUsAppToPersonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUsAppToPersonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUsAppToPersonRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListUsAppToPersonPathParams;

  @Metadata()
  queryParams: ListUsAppToPersonQueryParams;

  @Metadata()
  security: ListUsAppToPersonSecurity;
}


export class ListUsAppToPersonListUsAppToPersonResponseMeta extends SpeakeasyBase {
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


export class ListUsAppToPersonListUsAppToPersonResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=compliance", elemType: shared.MessagingV1ServiceUsAppToPerson })
  compliance?: shared.MessagingV1ServiceUsAppToPerson[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListUsAppToPersonListUsAppToPersonResponseMeta;
}


export class ListUsAppToPersonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUsAppToPersonResponse?: ListUsAppToPersonListUsAppToPersonResponse;

  @Metadata()
  statusCode: number;
}
