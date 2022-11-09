import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTORIGINATIONURL_SERVERS = [
	"https://trunking.twilio.com",
];



export class ListOriginationUrlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class ListOriginationUrlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListOriginationUrlSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListOriginationUrlRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListOriginationUrlPathParams;

  @Metadata()
  queryParams: ListOriginationUrlQueryParams;

  @Metadata()
  security: ListOriginationUrlSecurity;
}


export class ListOriginationUrlListOriginationUrlResponseMeta extends SpeakeasyBase {
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


export class ListOriginationUrlListOriginationUrlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListOriginationUrlListOriginationUrlResponseMeta;

  @Metadata({ data: "json, name=origination_urls", elemType: shared.TrunkingV1TrunkOriginationUrl })
  originationUrls?: shared.TrunkingV1TrunkOriginationUrl[];
}


export class ListOriginationUrlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listOriginationUrlResponse?: ListOriginationUrlListOriginationUrlResponse;

  @Metadata()
  statusCode: number;
}
