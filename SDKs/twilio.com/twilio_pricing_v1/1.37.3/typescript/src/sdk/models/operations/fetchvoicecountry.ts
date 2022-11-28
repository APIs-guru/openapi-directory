import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchVoiceCountryServerList = [
	"https://pricing.twilio.com",
] as const;


export class FetchVoiceCountryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IsoCountry" })
  isoCountry: string;
}


export class FetchVoiceCountrySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchVoiceCountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchVoiceCountryPathParams;

  @SpeakeasyMetadata()
  security: FetchVoiceCountrySecurity;
}


export class FetchVoiceCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pricingV1VoiceVoiceCountryInstance?: shared.PricingV1VoiceVoiceCountryInstance;
}
