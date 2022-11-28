import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchMessagingCountryServerList = [
	"https://pricing.twilio.com",
] as const;


export class FetchMessagingCountryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IsoCountry" })
  isoCountry: string;
}


export class FetchMessagingCountrySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchMessagingCountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchMessagingCountryPathParams;

  @SpeakeasyMetadata()
  security: FetchMessagingCountrySecurity;
}


export class FetchMessagingCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pricingV1MessagingMessagingCountryInstance?: shared.PricingV1MessagingMessagingCountryInstance;
}
