import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchAuthorizedConnectAppServerList = [
	"https://api.twilio.com",
] as const;


export class FetchAuthorizedConnectAppPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConnectAppSid" })
  connectAppSid: string;
}


export class FetchAuthorizedConnectAppSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchAuthorizedConnectAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchAuthorizedConnectAppPathParams;

  @SpeakeasyMetadata()
  security: FetchAuthorizedConnectAppSecurity;
}


export class FetchAuthorizedConnectAppResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountAuthorizedConnectApp?: shared.ApiV2010AccountAuthorizedConnectApp;
}
