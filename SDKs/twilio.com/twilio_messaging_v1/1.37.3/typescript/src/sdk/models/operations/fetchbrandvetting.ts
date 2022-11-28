import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchBrandVettingServerList = [
	"https://messaging.twilio.com",
] as const;


export class FetchBrandVettingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BrandSid" })
  brandSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BrandVettingSid" })
  brandVettingSid: string;
}


export class FetchBrandVettingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchBrandVettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchBrandVettingPathParams;

  @SpeakeasyMetadata()
  security: FetchBrandVettingSecurity;
}


export class FetchBrandVettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  messagingV1BrandRegistrationsBrandVetting?: shared.MessagingV1BrandRegistrationsBrandVetting;
}
