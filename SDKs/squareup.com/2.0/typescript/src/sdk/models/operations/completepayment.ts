import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompletePaymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment_id" })
  paymentId: string;
}


export class CompletePaymentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CompletePaymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompletePaymentPathParams;

  @Metadata()
  security: CompletePaymentSecurity;
}


export class CompletePaymentResponse extends SpeakeasyBase {
  @Metadata()
  completePaymentResponse?: shared.CompletePaymentResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
