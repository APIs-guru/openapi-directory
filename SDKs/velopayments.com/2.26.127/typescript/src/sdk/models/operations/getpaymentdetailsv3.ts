import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentDetailsV3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=paymentId" })
  paymentId: string;
}


export class GetPaymentDetailsV3QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;
}


export class GetPaymentDetailsV3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPaymentDetailsV3PathParams;

  @Metadata()
  queryParams: GetPaymentDetailsV3QueryParams;
}


export class GetPaymentDetailsV3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentResponseV3?: shared.PaymentResponseV3;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
