import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEADDRESS_SERVERS = [
	"https://api.twilio.com",
];



export class CreateAddressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class CreateAddressCreateAddressRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AutoCorrectAddress;" })
  autoCorrectAddress?: boolean;

  @Metadata({ data: "form, name=City;" })
  city: string;

  @Metadata({ data: "form, name=CustomerName;" })
  customerName: string;

  @Metadata({ data: "form, name=EmergencyEnabled;" })
  emergencyEnabled?: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=IsoCountry;" })
  isoCountry: string;

  @Metadata({ data: "form, name=PostalCode;" })
  postalCode: string;

  @Metadata({ data: "form, name=Region;" })
  region: string;

  @Metadata({ data: "form, name=Street;" })
  street: string;
}


export class CreateAddressSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateAddressRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateAddressPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateAddressCreateAddressRequest;

  @Metadata()
  security: CreateAddressSecurity;
}


export class CreateAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountAddress?: shared.ApiV2010AccountAddress;
}
