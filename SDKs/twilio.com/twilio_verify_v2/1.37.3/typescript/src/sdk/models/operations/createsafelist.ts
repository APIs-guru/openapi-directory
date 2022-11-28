import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSafelistServerList = [
	"https://verify.twilio.com",
] as const;


export class CreateSafelistCreateSafelistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=PhoneNumber;" })
  phoneNumber: string;
}


export class CreateSafelistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSafelistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSafelistCreateSafelistRequest;

  @SpeakeasyMetadata()
  security: CreateSafelistSecurity;
}


export class CreateSafelistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyV2Safelist?: shared.VerifyV2Safelist;
}
