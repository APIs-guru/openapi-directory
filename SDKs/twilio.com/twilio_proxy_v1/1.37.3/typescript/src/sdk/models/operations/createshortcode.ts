import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateShortCodeServerList = [
	"https://proxy.twilio.com",
] as const;


export class CreateShortCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateShortCodeCreateShortCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Sid;" })
  sid: string;
}


export class CreateShortCodeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateShortCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateShortCodePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateShortCodeCreateShortCodeRequest;

  @SpeakeasyMetadata()
  security: CreateShortCodeSecurity;
}


export class CreateShortCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  proxyV1ServiceShortCode?: shared.ProxyV1ServiceShortCode;
}
