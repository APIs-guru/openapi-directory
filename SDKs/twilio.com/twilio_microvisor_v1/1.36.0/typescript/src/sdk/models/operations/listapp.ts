import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTAPP_SERVERS = [
	"https://microvisor.twilio.com",
];



export class ListAppQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListAppSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAppRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListAppQueryParams;

  @Metadata()
  security: ListAppSecurity;
}


export class ListAppListAppResponseMeta extends SpeakeasyBase {
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


export class ListAppListAppResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apps", elemType: shared.MicrovisorV1App })
  apps?: shared.MicrovisorV1App[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListAppListAppResponseMeta;
}


export class ListAppResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAppResponse?: ListAppListAppResponse;

  @Metadata()
  statusCode: number;
}
