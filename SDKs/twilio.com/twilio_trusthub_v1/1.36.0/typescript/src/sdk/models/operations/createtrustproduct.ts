import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATETRUSTPRODUCT_SERVERS = [
	"https://trusthub.twilio.com",
];



export class CreateTrustProductCreateTrustProductRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Email;" })
  email: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=PolicySid;" })
  policySid: string;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;
}


export class CreateTrustProductSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTrustProductRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTrustProductCreateTrustProductRequest;

  @Metadata()
  security: CreateTrustProductSecurity;
}


export class CreateTrustProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trusthubV1TrustProduct?: shared.TrusthubV1TrustProduct;
}
