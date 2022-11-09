import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSIMIPADDRESS_SERVERS = [
	"https://supersim.twilio.com",
];



export class ListSimIpAddressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SimSid" })
  simSid: string;
}


export class ListSimIpAddressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSimIpAddressSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSimIpAddressRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSimIpAddressPathParams;

  @Metadata()
  queryParams: ListSimIpAddressQueryParams;

  @Metadata()
  security: ListSimIpAddressSecurity;
}


export class ListSimIpAddressListSimIpAddressResponseMeta extends SpeakeasyBase {
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


export class ListSimIpAddressListSimIpAddressResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip_addresses", elemType: shared.SupersimV1SimSimIpAddress })
  ipAddresses?: shared.SupersimV1SimSimIpAddress[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListSimIpAddressListSimIpAddressResponseMeta;
}


export class ListSimIpAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSimIpAddressResponse?: ListSimIpAddressListSimIpAddressResponse;

  @Metadata()
  statusCode: number;
}
