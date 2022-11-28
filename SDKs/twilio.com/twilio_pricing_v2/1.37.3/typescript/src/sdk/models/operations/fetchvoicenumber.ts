import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchVoiceNumberServerList = [
	"https://pricing.twilio.com",
] as const;


export class FetchVoiceNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DestinationNumber" })
  destinationNumber: string;
}


export class FetchVoiceNumberQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OriginationNumber" })
  originationNumber?: string;
}


export class FetchVoiceNumberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchVoiceNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchVoiceNumberPathParams;

  @SpeakeasyMetadata()
  queryParams: FetchVoiceNumberQueryParams;

  @SpeakeasyMetadata()
  security: FetchVoiceNumberSecurity;
}


export class FetchVoiceNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pricingV2VoiceVoiceNumber?: shared.PricingV2VoiceVoiceNumber;
}
