import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListAlphaSenderServerList = [
	"https://messaging.twilio.com",
] as const;


export class ListAlphaSenderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListAlphaSenderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListAlphaSenderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAlphaSenderListAlphaSenderResponseMeta extends SpeakeasyBase {
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


export class ListAlphaSenderListAlphaSenderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alpha_senders", elemType: shared.MessagingV1ServiceAlphaSender })
  alphaSenders?: shared.MessagingV1ServiceAlphaSender[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListAlphaSenderListAlphaSenderResponseMeta;
}


export class ListAlphaSenderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListAlphaSenderPathParams;

  @SpeakeasyMetadata()
  queryParams: ListAlphaSenderQueryParams;

  @SpeakeasyMetadata()
  security: ListAlphaSenderSecurity;
}


export class ListAlphaSenderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listAlphaSenderResponse?: ListAlphaSenderListAlphaSenderResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
