import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHPHONENUMBER_SERVERS = [
	"https://lookups.twilio.com",
];



export class FetchPhoneNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=PhoneNumber" })
  phoneNumber: string;
}


export class FetchPhoneNumberQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AddOns" })
  addOns?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=AddOnsData" })
  addOnsData?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CountryCode" })
  countryCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Type" })
  type?: string[];
}


export class FetchPhoneNumberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchPhoneNumberRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchPhoneNumberPathParams;

  @Metadata()
  queryParams: FetchPhoneNumberQueryParams;

  @Metadata()
  security: FetchPhoneNumberSecurity;
}


export class FetchPhoneNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  lookupsV1PhoneNumber?: shared.LookupsV1PhoneNumber;
}
