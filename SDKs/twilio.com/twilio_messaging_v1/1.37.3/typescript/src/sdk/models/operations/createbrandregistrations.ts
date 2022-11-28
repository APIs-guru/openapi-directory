import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateBrandRegistrationsServerList = [
	"https://messaging.twilio.com",
] as const;


export class CreateBrandRegistrationsCreateBrandRegistrationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=A2PProfileBundleSid;" })
  a2PProfileBundleSid: string;

  @SpeakeasyMetadata({ data: "form, name=BrandType;" })
  brandType?: string;

  @SpeakeasyMetadata({ data: "form, name=CustomerProfileBundleSid;" })
  customerProfileBundleSid: string;

  @SpeakeasyMetadata({ data: "form, name=Mock;" })
  mock?: boolean;

  @SpeakeasyMetadata({ data: "form, name=SkipAutomaticSecVet;" })
  skipAutomaticSecVet?: boolean;
}


export class CreateBrandRegistrationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateBrandRegistrationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateBrandRegistrationsCreateBrandRegistrationsRequest;

  @SpeakeasyMetadata()
  security: CreateBrandRegistrationsSecurity;
}


export class CreateBrandRegistrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  messagingV1BrandRegistrations?: shared.MessagingV1BrandRegistrations;
}
