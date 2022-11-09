import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePaymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment_id" })
  paymentId: string;
}


export class UpdatePaymentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpdatePaymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePaymentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePaymentRequest;

  @Metadata()
  security: UpdatePaymentSecurity;
}


export class UpdatePaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updatePaymentResponse?: shared.UpdatePaymentResponse;
}
