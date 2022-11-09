import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHTRUNKINGCOUNTRY_SERVERS = [
	"https://pricing.twilio.com",
];



export class FetchTrunkingCountryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=IsoCountry" })
  isoCountry: string;
}


export class FetchTrunkingCountrySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrunkingCountryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchTrunkingCountryPathParams;

  @Metadata()
  security: FetchTrunkingCountrySecurity;
}


export class FetchTrunkingCountryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pricingV2TrunkingCountryInstance?: shared.PricingV2TrunkingCountryInstance;
}
