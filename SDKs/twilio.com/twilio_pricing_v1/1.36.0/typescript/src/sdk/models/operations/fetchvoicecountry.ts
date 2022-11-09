import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHVOICECOUNTRY_SERVERS = [
	"https://pricing.twilio.com",
];



export class FetchVoiceCountryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IsoCountry" })
  isoCountry: string;
}


export class FetchVoiceCountrySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchVoiceCountryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchVoiceCountryPathParams;

  @Metadata()
  security: FetchVoiceCountrySecurity;
}


export class FetchVoiceCountryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pricingV1VoiceVoiceCountryInstance?: shared.PricingV1VoiceVoiceCountryInstance;
}
