import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSHORTCODE_SERVERS = [
	"https://proxy.twilio.com",
];



export class ListShortCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListShortCodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListShortCodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListShortCodeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListShortCodePathParams;

  @Metadata()
  queryParams: ListShortCodeQueryParams;

  @Metadata()
  security: ListShortCodeSecurity;
}


export class ListShortCodeListShortCodeResponseMeta extends SpeakeasyBase {
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


export class ListShortCodeListShortCodeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListShortCodeListShortCodeResponseMeta;

  @Metadata({ data: "json, name=short_codes", elemType: shared.ProxyV1ServiceShortCode })
  shortCodes?: shared.ProxyV1ServiceShortCode[];
}


export class ListShortCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listShortCodeResponse?: ListShortCodeListShortCodeResponse;

  @Metadata()
  statusCode: number;
}
