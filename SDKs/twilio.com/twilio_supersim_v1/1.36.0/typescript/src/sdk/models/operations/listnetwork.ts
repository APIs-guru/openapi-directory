import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTNETWORK_SERVERS = [
	"https://supersim.twilio.com",
];



export class ListNetworkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=IsoCountry" })
  isoCountry?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Mcc" })
  mcc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Mnc" })
  mnc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListNetworkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListNetworkRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListNetworkQueryParams;

  @Metadata()
  security: ListNetworkSecurity;
}


export class ListNetworkListNetworkResponseMeta extends SpeakeasyBase {
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


export class ListNetworkListNetworkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListNetworkListNetworkResponseMeta;

  @Metadata({ data: "json, name=networks", elemType: shared.SupersimV1Network })
  networks?: shared.SupersimV1Network[];
}


export class ListNetworkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listNetworkResponse?: ListNetworkListNetworkResponse;

  @Metadata()
  statusCode: number;
}
