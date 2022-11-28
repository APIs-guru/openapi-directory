import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PayorGetBrandingPathParams extends SpeakeasyBase {
    payorId: string;
}
export declare class PayorGetBrandingRequest extends SpeakeasyBase {
    pathParams: PayorGetBrandingPathParams;
}
export declare class PayorGetBrandingResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    payorBrandingResponse?: shared.PayorBrandingResponse;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse403?: any;
}
