import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchInteractionServerList = [
	"https://proxy.twilio.com",
] as const;


export class FetchInteractionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SessionSid" })
  sessionSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchInteractionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchInteractionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchInteractionPathParams;

  @SpeakeasyMetadata()
  security: FetchInteractionSecurity;
}


export class FetchInteractionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  proxyV1ServiceSessionInteraction?: shared.ProxyV1ServiceSessionInteraction;
}
