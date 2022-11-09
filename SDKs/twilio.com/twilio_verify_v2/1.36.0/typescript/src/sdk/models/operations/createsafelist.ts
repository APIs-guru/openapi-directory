import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESAFELIST_SERVERS = [
	"https://verify.twilio.com",
];



export class CreateSafelistCreateSafelistRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=PhoneNumber;" })
  phoneNumber: string;
}


export class CreateSafelistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSafelistRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSafelistCreateSafelistRequest;

  @Metadata()
  security: CreateSafelistSecurity;
}


export class CreateSafelistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2Safelist?: shared.VerifyV2Safelist;
}
