import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchTrunkingNumberServerList = [
	"https://pricing.twilio.com",
] as const;


export class FetchTrunkingNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DestinationNumber" })
  destinationNumber: string;
}


export class FetchTrunkingNumberQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OriginationNumber" })
  originationNumber?: string;
}


export class FetchTrunkingNumberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrunkingNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchTrunkingNumberPathParams;

  @SpeakeasyMetadata()
  queryParams: FetchTrunkingNumberQueryParams;

  @SpeakeasyMetadata()
  security: FetchTrunkingNumberSecurity;
}


export class FetchTrunkingNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pricingV2TrunkingNumber?: shared.PricingV2TrunkingNumber;
}
