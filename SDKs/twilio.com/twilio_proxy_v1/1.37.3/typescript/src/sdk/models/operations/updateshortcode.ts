import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateShortCodeServerList = [
	"https://proxy.twilio.com",
] as const;


export class UpdateShortCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateShortCodeUpdateShortCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=IsReserved;" })
  isReserved?: boolean;
}


export class UpdateShortCodeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateShortCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateShortCodePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateShortCodeUpdateShortCodeRequest;

  @SpeakeasyMetadata()
  security: UpdateShortCodeSecurity;
}


export class UpdateShortCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  proxyV1ServiceShortCode?: shared.ProxyV1ServiceShortCode;
}
