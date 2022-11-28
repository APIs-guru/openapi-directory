import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListUsAppToPersonServerList = [
	"https://messaging.twilio.com",
] as const;


export class ListUsAppToPersonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MessagingServiceSid" })
  messagingServiceSid: string;
}


export class ListUsAppToPersonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUsAppToPersonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUsAppToPersonListUsAppToPersonResponseMeta extends SpeakeasyBase {
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


export class ListUsAppToPersonListUsAppToPersonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compliance", elemType: shared.MessagingV1ServiceUsAppToPerson })
  compliance?: shared.MessagingV1ServiceUsAppToPerson[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListUsAppToPersonListUsAppToPersonResponseMeta;
}


export class ListUsAppToPersonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListUsAppToPersonPathParams;

  @SpeakeasyMetadata()
  queryParams: ListUsAppToPersonQueryParams;

  @SpeakeasyMetadata()
  security: ListUsAppToPersonSecurity;
}


export class ListUsAppToPersonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listUsAppToPersonResponse?: ListUsAppToPersonListUsAppToPersonResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
