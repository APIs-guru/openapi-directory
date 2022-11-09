import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEPHONENUMBER_SERVERS = [
	"https://proxy.twilio.com",
];



export class CreatePhoneNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreatePhoneNumberCreatePhoneNumberRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=IsReserved;" })
  isReserved?: boolean;

  @Metadata({ data: "form, name=PhoneNumber;" })
  phoneNumber?: string;

  @Metadata({ data: "form, name=Sid;" })
  sid?: string;
}


export class CreatePhoneNumberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreatePhoneNumberRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreatePhoneNumberPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreatePhoneNumberCreatePhoneNumberRequest;

  @Metadata()
  security: CreatePhoneNumberSecurity;
}


export class CreatePhoneNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  proxyV1ServicePhoneNumber?: shared.ProxyV1ServicePhoneNumber;
}
