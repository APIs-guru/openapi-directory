import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSimIpAddressServerList = [
	"https://supersim.twilio.com",
] as const;


export class ListSimIpAddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SimSid" })
  simSid: string;
}


export class ListSimIpAddressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSimIpAddressSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSimIpAddressListSimIpAddressResponseMeta extends SpeakeasyBase {
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


export class ListSimIpAddressListSimIpAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip_addresses", elemType: shared.SupersimV1SimSimIpAddress })
  ipAddresses?: shared.SupersimV1SimSimIpAddress[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListSimIpAddressListSimIpAddressResponseMeta;
}


export class ListSimIpAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSimIpAddressPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSimIpAddressQueryParams;

  @SpeakeasyMetadata()
  security: ListSimIpAddressSecurity;
}


export class ListSimIpAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSimIpAddressResponse?: ListSimIpAddressListSimIpAddressResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
