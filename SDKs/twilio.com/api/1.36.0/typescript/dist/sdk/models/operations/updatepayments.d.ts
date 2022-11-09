import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEPAYMENTS_SERVERS: string[];
export declare class UpdatePaymentsPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
    sid: string;
}
export declare class UpdatePaymentsUpdatePaymentsRequest extends SpeakeasyBase {
    capture?: shared.PaymentsEnumCaptureEnum;
    idempotencyKey: string;
    status?: shared.PaymentsEnumStatusEnum;
    statusCallback: string;
}
export declare class UpdatePaymentsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdatePaymentsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdatePaymentsPathParams;
    request?: UpdatePaymentsUpdatePaymentsRequest;
    security: UpdatePaymentsSecurity;
}
export declare class UpdatePaymentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountCallPayments?: shared.ApiV2010AccountCallPayments;
}
