import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubmitPayoutV3MultipartFormData extends SpeakeasyBase {
    file?: shared.PaymentInstructionV3[];
    payorId?: string;
    payoutFromPayorId?: string;
    payoutToPayorId?: string;
}
export declare class SubmitPayoutV3Requests extends SpeakeasyBase {
    createPayoutRequestV3?: shared.CreatePayoutRequestV3;
    object?: SubmitPayoutV3MultipartFormData;
}
export declare class SubmitPayoutV3Request extends SpeakeasyBase {
    request: SubmitPayoutV3Requests;
}
export declare class SubmitPayoutV3Response extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
}
