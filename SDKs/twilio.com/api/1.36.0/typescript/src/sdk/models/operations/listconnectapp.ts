import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCONNECTAPP_SERVERS = [
	"https://api.twilio.com",
];



export class ListConnectAppPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListConnectAppQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListConnectAppSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConnectAppRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListConnectAppPathParams;

  @Metadata()
  queryParams: ListConnectAppQueryParams;

  @Metadata()
  security: ListConnectAppSecurity;
}


export class ListConnectAppListConnectAppResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connect_apps", elemType: shared.ApiV2010AccountConnectApp })
  connectApps?: shared.ApiV2010AccountConnectApp[];

  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @Metadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListConnectAppResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listConnectAppResponse?: ListConnectAppListConnectAppResponse;

  @Metadata()
  statusCode: number;
}
