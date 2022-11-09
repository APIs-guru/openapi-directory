import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEADDRESS_SERVERS = [
	"https://api.twilio.com",
];



export class UpdateAddressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateAddressUpdateAddressRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AutoCorrectAddress;" })
  autoCorrectAddress?: boolean;

  @Metadata({ data: "form, name=City;" })
  city?: string;

  @Metadata({ data: "form, name=CustomerName;" })
  customerName?: string;

  @Metadata({ data: "form, name=EmergencyEnabled;" })
  emergencyEnabled?: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=PostalCode;" })
  postalCode?: string;

  @Metadata({ data: "form, name=Region;" })
  region?: string;

  @Metadata({ data: "form, name=Street;" })
  street?: string;
}


export class UpdateAddressSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateAddressRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateAddressPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateAddressUpdateAddressRequest;

  @Metadata()
  security: UpdateAddressSecurity;
}


export class UpdateAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountAddress?: shared.ApiV2010AccountAddress;
}
