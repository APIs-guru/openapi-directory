import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHTRUNKINGNUMBER_SERVERS = [
	"https://pricing.twilio.com",
];



export class FetchTrunkingNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DestinationNumber" })
  destinationNumber: string;
}


export class FetchTrunkingNumberQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=OriginationNumber" })
  originationNumber?: string;
}


export class FetchTrunkingNumberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTrunkingNumberRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchTrunkingNumberPathParams;

  @Metadata()
  queryParams: FetchTrunkingNumberQueryParams;

  @Metadata()
  security: FetchTrunkingNumberSecurity;
}


export class FetchTrunkingNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pricingV2TrunkingNumber?: shared.PricingV2TrunkingNumber;
}
