import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListNetworkAccessProfileNetworkServerList = [
	"https://supersim.twilio.com",
] as const;


export class ListNetworkAccessProfileNetworkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=NetworkAccessProfileSid" })
  networkAccessProfileSid: string;
}


export class ListNetworkAccessProfileNetworkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListNetworkAccessProfileNetworkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta extends SpeakeasyBase {
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


export class ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=networks", elemType: shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork })
  networks?: shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork[];
}


export class ListNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListNetworkAccessProfileNetworkPathParams;

  @SpeakeasyMetadata()
  queryParams: ListNetworkAccessProfileNetworkQueryParams;

  @SpeakeasyMetadata()
  security: ListNetworkAccessProfileNetworkSecurity;
}


export class ListNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listNetworkAccessProfileNetworkResponse?: ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
