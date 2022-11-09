import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATETRUSTPRODUCT_SERVERS = [
	"https://trusthub.twilio.com",
];



export class UpdateTrustProductPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateTrustProductUpdateTrustProductRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Email;" })
  email?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Status;" })
  status?: shared.TrustProductEnumStatusEnum;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;
}


export class UpdateTrustProductSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateTrustProductRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateTrustProductPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTrustProductUpdateTrustProductRequest;

  @Metadata()
  security: UpdateTrustProductSecurity;
}


export class UpdateTrustProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trusthubV1TrustProduct?: shared.TrusthubV1TrustProduct;
}
