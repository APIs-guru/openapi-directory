import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PayorCreateApplicationRequestPathParams extends SpeakeasyBase {
    payorId: string;
}
export declare class PayorCreateApplicationRequestRequest extends SpeakeasyBase {
    pathParams: PayorCreateApplicationRequestPathParams;
    request: shared.PayorCreateApplicationRequest;
}
export declare class PayorCreateApplicationRequestResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
    inlineResponse409?: any;
}
