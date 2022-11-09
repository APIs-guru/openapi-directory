import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECUSTOMERPROFILE_SERVERS = [
	"https://trusthub.twilio.com",
];



export class UpdateCustomerProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateCustomerProfileUpdateCustomerProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Email;" })
  email?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Status;" })
  status?: shared.CustomerProfileEnumStatusEnum;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;
}


export class UpdateCustomerProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateCustomerProfileRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateCustomerProfilePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateCustomerProfileUpdateCustomerProfileRequest;

  @Metadata()
  security: UpdateCustomerProfileSecurity;
}


export class UpdateCustomerProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trusthubV1CustomerProfile?: shared.TrusthubV1CustomerProfile;
}
