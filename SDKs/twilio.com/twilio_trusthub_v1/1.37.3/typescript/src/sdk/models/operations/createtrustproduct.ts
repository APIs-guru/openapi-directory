import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateTrustProductServerList = [
	"https://trusthub.twilio.com",
] as const;


export class CreateTrustProductCreateTrustProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Email;" })
  email: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=PolicySid;" })
  policySid: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;
}


export class CreateTrustProductSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTrustProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTrustProductCreateTrustProductRequest;

  @SpeakeasyMetadata()
  security: CreateTrustProductSecurity;
}


export class CreateTrustProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trusthubV1TrustProduct?: shared.TrusthubV1TrustProduct;
}
