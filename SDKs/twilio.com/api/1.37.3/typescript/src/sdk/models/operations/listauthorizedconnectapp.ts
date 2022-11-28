import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListAuthorizedConnectAppServerList = [
	"https://api.twilio.com",
] as const;


export class ListAuthorizedConnectAppPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListAuthorizedConnectAppQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListAuthorizedConnectAppSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAuthorizedConnectAppListAuthorizedConnectAppResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorized_connect_apps", elemType: shared.ApiV2010AccountAuthorizedConnectApp })
  authorizedConnectApps?: shared.ApiV2010AccountAuthorizedConnectApp[];

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListAuthorizedConnectAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListAuthorizedConnectAppPathParams;

  @SpeakeasyMetadata()
  queryParams: ListAuthorizedConnectAppQueryParams;

  @SpeakeasyMetadata()
  security: ListAuthorizedConnectAppSecurity;
}


export class ListAuthorizedConnectAppResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listAuthorizedConnectAppResponse?: ListAuthorizedConnectAppListAuthorizedConnectAppResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
