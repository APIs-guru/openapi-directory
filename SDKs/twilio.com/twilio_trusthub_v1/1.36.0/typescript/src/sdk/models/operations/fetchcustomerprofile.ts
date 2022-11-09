import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHCUSTOMERPROFILE_SERVERS = [
	"https://trusthub.twilio.com",
];



export class FetchCustomerProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchCustomerProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchCustomerProfileRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchCustomerProfilePathParams;

  @Metadata()
  security: FetchCustomerProfileSecurity;
}


export class FetchCustomerProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trusthubV1CustomerProfile?: shared.TrusthubV1CustomerProfile;
}
