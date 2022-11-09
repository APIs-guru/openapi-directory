import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTAUTHORIZEDCONNECTAPP_SERVERS = [
	"https://api.twilio.com",
];



export class ListAuthorizedConnectAppPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListAuthorizedConnectAppQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListAuthorizedConnectAppSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAuthorizedConnectAppRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListAuthorizedConnectAppPathParams;

  @Metadata()
  queryParams: ListAuthorizedConnectAppQueryParams;

  @Metadata()
  security: ListAuthorizedConnectAppSecurity;
}


export class ListAuthorizedConnectAppListAuthorizedConnectAppResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorized_connect_apps", elemType: shared.ApiV2010AccountAuthorizedConnectApp })
  authorizedConnectApps?: shared.ApiV2010AccountAuthorizedConnectApp[];

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


export class ListAuthorizedConnectAppResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAuthorizedConnectAppResponse?: ListAuthorizedConnectAppListAuthorizedConnectAppResponse;

  @Metadata()
  statusCode: number;
}
