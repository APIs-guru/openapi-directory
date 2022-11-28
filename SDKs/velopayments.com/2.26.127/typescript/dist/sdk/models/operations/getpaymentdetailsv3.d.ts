import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentDetailsV3PathParams extends SpeakeasyBase {
    paymentId: string;
}
export declare class GetPaymentDetailsV3QueryParams extends SpeakeasyBase {
    sensitive?: boolean;
}
export declare class GetPaymentDetailsV3Request extends SpeakeasyBase {
    pathParams: GetPaymentDetailsV3PathParams;
    queryParams: GetPaymentDetailsV3QueryParams;
}
export declare class GetPaymentDetailsV3Response extends SpeakeasyBase {
    contentType: string;
    paymentResponseV3?: shared.PaymentResponseV3;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
