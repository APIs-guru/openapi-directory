import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESHORTCODE_SERVERS = [
	"https://proxy.twilio.com",
];



export class UpdateShortCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateShortCodeUpdateShortCodeRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=IsReserved;" })
  isReserved?: boolean;
}


export class UpdateShortCodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateShortCodeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateShortCodePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateShortCodeUpdateShortCodeRequest;

  @Metadata()
  security: UpdateShortCodeSecurity;
}


export class UpdateShortCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  proxyV1ServiceShortCode?: shared.ProxyV1ServiceShortCode;
}
