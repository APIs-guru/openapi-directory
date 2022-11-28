import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PayorEmailOptOutPathParams extends SpeakeasyBase {
    payorId: string;
}
export declare class PayorEmailOptOutRequest extends SpeakeasyBase {
    pathParams: PayorEmailOptOutPathParams;
    request: shared.PayorEmailOptOutRequest;
}
export declare class PayorEmailOptOutResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse403?: any;
}
