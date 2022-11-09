import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESHORTCODE_SERVERS = [
	"https://proxy.twilio.com",
];



export class CreateShortCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateShortCodeCreateShortCodeRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Sid;" })
  sid: string;
}


export class CreateShortCodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateShortCodeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateShortCodePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateShortCodeCreateShortCodeRequest;

  @Metadata()
  security: CreateShortCodeSecurity;
}


export class CreateShortCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  proxyV1ServiceShortCode?: shared.ProxyV1ServiceShortCode;
}
