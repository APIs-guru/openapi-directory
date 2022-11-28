import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListOriginationUrlServerList = [
	"https://trunking.twilio.com",
] as const;


export class ListOriginationUrlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class ListOriginationUrlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListOriginationUrlSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListOriginationUrlListOriginationUrlResponseMeta extends SpeakeasyBase {
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


export class ListOriginationUrlListOriginationUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListOriginationUrlListOriginationUrlResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=origination_urls", elemType: shared.TrunkingV1TrunkOriginationUrl })
  originationUrls?: shared.TrunkingV1TrunkOriginationUrl[];
}


export class ListOriginationUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListOriginationUrlPathParams;

  @SpeakeasyMetadata()
  queryParams: ListOriginationUrlQueryParams;

  @SpeakeasyMetadata()
  security: ListOriginationUrlSecurity;
}


export class ListOriginationUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listOriginationUrlResponse?: ListOriginationUrlListOriginationUrlResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
