import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEPHONENUMBER_SERVERS = [
	"https://proxy.twilio.com",
];



export class UpdatePhoneNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdatePhoneNumberUpdatePhoneNumberRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=IsReserved;" })
  isReserved?: boolean;
}


export class UpdatePhoneNumberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdatePhoneNumberRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdatePhoneNumberPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdatePhoneNumberUpdatePhoneNumberRequest;

  @Metadata()
  security: UpdatePhoneNumberSecurity;
}


export class UpdatePhoneNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  proxyV1ServicePhoneNumber?: shared.ProxyV1ServicePhoneNumber;
}
