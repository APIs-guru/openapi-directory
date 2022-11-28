import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PayorAddPayorLogoPathParams extends SpeakeasyBase {
    payorId: string;
}
export declare class PayorAddPayorLogoRequest extends SpeakeasyBase {
    pathParams: PayorAddPayorLogoPathParams;
    request: shared.PayorLogoRequest;
}
export declare class PayorAddPayorLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
