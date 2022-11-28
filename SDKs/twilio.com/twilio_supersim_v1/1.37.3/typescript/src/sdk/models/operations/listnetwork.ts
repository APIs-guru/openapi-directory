import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListNetworkServerList = [
	"https://supersim.twilio.com",
] as const;


export class ListNetworkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IsoCountry" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Mcc" })
  mcc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Mnc" })
  mnc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListNetworkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListNetworkListNetworkResponseMeta extends SpeakeasyBase {
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


export class ListNetworkListNetworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListNetworkListNetworkResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=networks", elemType: shared.SupersimV1Network })
  networks?: shared.SupersimV1Network[];
}


export class ListNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListNetworkQueryParams;

  @SpeakeasyMetadata()
  security: ListNetworkSecurity;
}


export class ListNetworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listNetworkResponse?: ListNetworkListNetworkResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
