import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateBrandVettingServerList = [
	"https://messaging.twilio.com",
] as const;


export class CreateBrandVettingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BrandSid" })
  brandSid: string;
}


export class CreateBrandVettingCreateBrandVettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=VettingId;" })
  vettingId?: string;

  @SpeakeasyMetadata({ data: "form, name=VettingProvider;" })
  vettingProvider: shared.BrandVettingEnumVettingProviderEnum;
}


export class CreateBrandVettingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateBrandVettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateBrandVettingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateBrandVettingCreateBrandVettingRequest;

  @SpeakeasyMetadata()
  security: CreateBrandVettingSecurity;
}


export class CreateBrandVettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  messagingV1BrandRegistrationsBrandVetting?: shared.MessagingV1BrandRegistrationsBrandVetting;
}
