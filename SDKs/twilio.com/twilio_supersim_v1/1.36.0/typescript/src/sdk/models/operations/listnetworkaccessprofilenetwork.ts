import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTNETWORKACCESSPROFILENETWORK_SERVERS = [
	"https://supersim.twilio.com",
];



export class ListNetworkAccessProfileNetworkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=NetworkAccessProfileSid" })
  networkAccessProfileSid: string;
}


export class ListNetworkAccessProfileNetworkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListNetworkAccessProfileNetworkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListNetworkAccessProfileNetworkPathParams;

  @Metadata()
  queryParams: ListNetworkAccessProfileNetworkQueryParams;

  @Metadata()
  security: ListNetworkAccessProfileNetworkSecurity;
}


export class ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta extends SpeakeasyBase {
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


export class ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta;

  @Metadata({ data: "json, name=networks", elemType: shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork })
  networks?: shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork[];
}


export class ListNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listNetworkAccessProfileNetworkResponse?: ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse;

  @Metadata()
  statusCode: number;
}
