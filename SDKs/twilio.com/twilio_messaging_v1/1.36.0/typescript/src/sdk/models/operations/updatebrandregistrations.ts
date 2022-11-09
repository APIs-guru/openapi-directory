import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEBRANDREGISTRATIONS_SERVERS = [
	"https://messaging.twilio.com",
];



export class UpdateBrandRegistrationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateBrandRegistrationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateBrandRegistrationsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateBrandRegistrationsPathParams;

  @Metadata()
  security: UpdateBrandRegistrationsSecurity;
}


export class UpdateBrandRegistrationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  messagingV1BrandRegistrations?: shared.MessagingV1BrandRegistrations;
}
