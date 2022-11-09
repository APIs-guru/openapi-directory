import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrievePaymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=payment_id" })
  paymentId: string;
}


export class RetrievePaymentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrievePaymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrievePaymentPathParams;

  @Metadata()
  security: RetrievePaymentSecurity;
}


export class RetrievePaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v1Payment?: shared.V1Payment;
}
