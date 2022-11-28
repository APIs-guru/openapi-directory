import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentDetailsV4PathParams extends SpeakeasyBase {
    paymentId: string;
}
export declare class GetPaymentDetailsV4QueryParams extends SpeakeasyBase {
    sensitive?: boolean;
}
export declare class GetPaymentDetailsV4Request extends SpeakeasyBase {
    pathParams: GetPaymentDetailsV4PathParams;
    queryParams: GetPaymentDetailsV4QueryParams;
}
export declare class GetPaymentDetailsV4Response extends SpeakeasyBase {
    contentType: string;
    paymentResponseV4?: shared.PaymentResponseV4;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
