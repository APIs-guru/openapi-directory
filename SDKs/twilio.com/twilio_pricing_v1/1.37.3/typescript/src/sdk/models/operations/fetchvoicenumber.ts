import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchVoiceNumberServerList = [
	"https://pricing.twilio.com",
] as const;


export class FetchVoiceNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Number" })
  number: string;
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
  security: FetchVoiceNumberSecurity;
}


export class FetchVoiceNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pricingV1VoiceVoiceNumber?: shared.PricingV1VoiceVoiceNumber;
}
