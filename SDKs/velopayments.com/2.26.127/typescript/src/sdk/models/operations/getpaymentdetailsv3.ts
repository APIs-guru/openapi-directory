import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentDetailsV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentId" })
  paymentId: string;
}


export class GetPaymentDetailsV3QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;
}


export class GetPaymentDetailsV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentDetailsV3PathParams;

  @SpeakeasyMetadata()
  queryParams: GetPaymentDetailsV3QueryParams;
}


export class GetPaymentDetailsV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentResponseV3?: shared.PaymentResponseV3;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
