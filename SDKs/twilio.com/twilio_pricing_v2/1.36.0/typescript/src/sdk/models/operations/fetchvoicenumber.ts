import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHVOICENUMBER_SERVERS = [
	"https://pricing.twilio.com",
];



export class FetchVoiceNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DestinationNumber" })
  destinationNumber: string;
}


export class FetchVoiceNumberQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=OriginationNumber" })
  originationNumber?: string;
}


export class FetchVoiceNumberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchVoiceNumberRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchVoiceNumberPathParams;

  @Metadata()
  queryParams: FetchVoiceNumberQueryParams;

  @Metadata()
  security: FetchVoiceNumberSecurity;
}


export class FetchVoiceNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pricingV2VoiceVoiceNumber?: shared.PricingV2VoiceVoiceNumber;
}
