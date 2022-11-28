import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateCustomerProfileServerList = [
	"https://trusthub.twilio.com",
] as const;


export class UpdateCustomerProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateCustomerProfileUpdateCustomerProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Email;" })
  email?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status?: shared.CustomerProfileEnumStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;
}


export class UpdateCustomerProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateCustomerProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateCustomerProfilePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateCustomerProfileUpdateCustomerProfileRequest;

  @SpeakeasyMetadata()
  security: UpdateCustomerProfileSecurity;
}


export class UpdateCustomerProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trusthubV1CustomerProfile?: shared.TrusthubV1CustomerProfile;
}
