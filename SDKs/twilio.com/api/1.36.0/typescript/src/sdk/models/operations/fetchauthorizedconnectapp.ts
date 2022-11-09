import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHAUTHORIZEDCONNECTAPP_SERVERS = [
	"https://api.twilio.com",
];



export class FetchAuthorizedConnectAppPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConnectAppSid" })
  connectAppSid: string;
}


export class FetchAuthorizedConnectAppSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchAuthorizedConnectAppRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchAuthorizedConnectAppPathParams;

  @Metadata()
  security: FetchAuthorizedConnectAppSecurity;
}


export class FetchAuthorizedConnectAppResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountAuthorizedConnectApp?: shared.ApiV2010AccountAuthorizedConnectApp;
}
