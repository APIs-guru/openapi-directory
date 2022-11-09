import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHBRANDREGISTRATIONS_SERVERS = [
	"https://messaging.twilio.com",
];



export class FetchBrandRegistrationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchBrandRegistrationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchBrandRegistrationsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchBrandRegistrationsPathParams;

  @Metadata()
  security: FetchBrandRegistrationsSecurity;
}


export class FetchBrandRegistrationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  messagingV1BrandRegistrations?: shared.MessagingV1BrandRegistrations;
}
