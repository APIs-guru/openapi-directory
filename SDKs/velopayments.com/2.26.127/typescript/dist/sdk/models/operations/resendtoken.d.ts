import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResendTokenPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class ResendTokenRequest extends SpeakeasyBase {
    pathParams: ResendTokenPathParams;
    request: shared.ResendTokenRequest;
}
export declare class ResendTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
}
