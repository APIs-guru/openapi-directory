import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEBRANDVETTING_SERVERS = [
	"https://messaging.twilio.com",
];



export class CreateBrandVettingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=BrandSid" })
  brandSid: string;
}


export class CreateBrandVettingCreateBrandVettingRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=VettingId;" })
  vettingId?: string;

  @Metadata({ data: "form, name=VettingProvider;" })
  vettingProvider: shared.BrandVettingEnumVettingProviderEnum;
}


export class CreateBrandVettingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateBrandVettingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateBrandVettingPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateBrandVettingCreateBrandVettingRequest;

  @Metadata()
  security: CreateBrandVettingSecurity;
}


export class CreateBrandVettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  messagingV1BrandRegistrationsBrandVetting?: shared.MessagingV1BrandRegistrationsBrandVetting;
}
