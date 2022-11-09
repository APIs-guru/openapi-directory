import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHMESSAGINGCOUNTRY_SERVERS = [
	"https://pricing.twilio.com",
];



export class FetchMessagingCountryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IsoCountry" })
  isoCountry: string;
}


export class FetchMessagingCountrySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchMessagingCountryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchMessagingCountryPathParams;

  @Metadata()
  security: FetchMessagingCountrySecurity;
}


export class FetchMessagingCountryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pricingV1MessagingMessagingCountryInstance?: shared.PricingV1MessagingMessagingCountryInstance;
}
