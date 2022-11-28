import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentDetailsV4PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentId" })
  paymentId: string;
}


export class GetPaymentDetailsV4QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;
}


export class GetPaymentDetailsV4Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentDetailsV4PathParams;

  @SpeakeasyMetadata()
  queryParams: GetPaymentDetailsV4QueryParams;
}


export class GetPaymentDetailsV4Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentResponseV4?: shared.PaymentResponseV4;

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
