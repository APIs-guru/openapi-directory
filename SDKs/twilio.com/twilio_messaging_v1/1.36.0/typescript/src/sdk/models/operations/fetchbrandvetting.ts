import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHBRANDVETTING_SERVERS = [
	"https://messaging.twilio.com",
];



export class FetchBrandVettingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=BrandSid" })
  brandSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=BrandVettingSid" })
  brandVettingSid: string;
}


export class FetchBrandVettingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchBrandVettingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchBrandVettingPathParams;

  @Metadata()
  security: FetchBrandVettingSecurity;
}


export class FetchBrandVettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  messagingV1BrandRegistrationsBrandVetting?: shared.MessagingV1BrandRegistrationsBrandVetting;
}
