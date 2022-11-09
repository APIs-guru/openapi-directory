import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePaymentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreatePaymentRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreatePaymentRequest;

  @Metadata()
  security: CreatePaymentSecurity;
}


export class CreatePaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createPaymentResponse?: shared.CreatePaymentResponse;

  @Metadata()
  statusCode: number;
}
