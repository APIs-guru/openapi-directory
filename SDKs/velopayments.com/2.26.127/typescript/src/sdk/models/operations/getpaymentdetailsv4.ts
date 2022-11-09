import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentDetailsV4PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=paymentId" })
  paymentId: string;
}


export class GetPaymentDetailsV4QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;
}


export class GetPaymentDetailsV4Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPaymentDetailsV4PathParams;

  @Metadata()
  queryParams: GetPaymentDetailsV4QueryParams;
}


export class GetPaymentDetailsV4Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentResponseV4?: shared.PaymentResponseV4;

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
