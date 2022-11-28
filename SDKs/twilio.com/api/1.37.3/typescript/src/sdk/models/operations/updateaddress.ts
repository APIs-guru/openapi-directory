import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateAddressServerList = [
	"https://api.twilio.com",
] as const;


export class UpdateAddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateAddressUpdateAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AutoCorrectAddress;" })
  autoCorrectAddress?: boolean;

  @SpeakeasyMetadata({ data: "form, name=City;" })
  city?: string;

  @SpeakeasyMetadata({ data: "form, name=CustomerName;" })
  customerName?: string;

  @SpeakeasyMetadata({ data: "form, name=EmergencyEnabled;" })
  emergencyEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=PostalCode;" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "form, name=Region;" })
  region?: string;

  @SpeakeasyMetadata({ data: "form, name=Street;" })
  street?: string;
}


export class UpdateAddressSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateAddressPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateAddressUpdateAddressRequest;

  @SpeakeasyMetadata()
  security: UpdateAddressSecurity;
}


export class UpdateAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountAddress?: shared.ApiV2010AccountAddress;
}
