import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnregisterMfaPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UnregisterMfaRequest extends SpeakeasyBase {
    pathParams: UnregisterMfaPathParams;
    request: shared.UnregisterMfaRequest;
}
export declare class UnregisterMfaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
