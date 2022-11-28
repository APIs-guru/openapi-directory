import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchMediaServerList = [
	"https://api.twilio.com",
] as const;


export class FetchMediaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MessageSid" })
  messageSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchMediaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchMediaPathParams;

  @SpeakeasyMetadata()
  security: FetchMediaSecurity;
}


export class FetchMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountMessageMedia?: shared.ApiV2010AccountMessageMedia;
}
