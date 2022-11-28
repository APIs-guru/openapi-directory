import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdatePhoneNumberServerList = [
	"https://proxy.twilio.com",
] as const;


export class UpdatePhoneNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdatePhoneNumberUpdatePhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=IsReserved;" })
  isReserved?: boolean;
}


export class UpdatePhoneNumberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdatePhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdatePhoneNumberPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdatePhoneNumberUpdatePhoneNumberRequest;

  @SpeakeasyMetadata()
  security: UpdatePhoneNumberSecurity;
}


export class UpdatePhoneNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  proxyV1ServicePhoneNumber?: shared.ProxyV1ServicePhoneNumber;
}
