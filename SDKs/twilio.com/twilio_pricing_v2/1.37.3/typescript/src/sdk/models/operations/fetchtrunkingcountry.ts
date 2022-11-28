import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchTrunkingCountryServerList = [
	"https://pricing.twilio.com",
] as const;


export class FetchTrunkingCountryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IsoCountry" })
  isoCountry: string;
}


export class FetchTrunkingCountrySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrunkingCountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchTrunkingCountryPathParams;

  @SpeakeasyMetadata()
  security: FetchTrunkingCountrySecurity;
}


export class FetchTrunkingCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pricingV2TrunkingCountryInstance?: shared.PricingV2TrunkingCountryInstance;
}
