import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEBRANDREGISTRATIONS_SERVERS = [
	"https://messaging.twilio.com",
];



export class CreateBrandRegistrationsCreateBrandRegistrationsRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=A2PProfileBundleSid;" })
  a2PProfileBundleSid: string;

  @Metadata({ data: "form, name=BrandType;" })
  brandType?: string;

  @Metadata({ data: "form, name=CustomerProfileBundleSid;" })
  customerProfileBundleSid: string;

  @Metadata({ data: "form, name=Mock;" })
  mock?: boolean;

  @Metadata({ data: "form, name=SkipAutomaticSecVet;" })
  skipAutomaticSecVet?: boolean;
}


export class CreateBrandRegistrationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateBrandRegistrationsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateBrandRegistrationsCreateBrandRegistrationsRequest;

  @Metadata()
  security: CreateBrandRegistrationsSecurity;
}


export class CreateBrandRegistrationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  messagingV1BrandRegistrations?: shared.MessagingV1BrandRegistrations;
}
