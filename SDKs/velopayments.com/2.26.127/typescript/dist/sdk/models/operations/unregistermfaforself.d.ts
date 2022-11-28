import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnregisterMfaForSelfHeaders extends SpeakeasyBase {
    authorization?: string;
}
export declare class UnregisterMfaForSelfRequest extends SpeakeasyBase {
    headers: UnregisterMfaForSelfHeaders;
    request: shared.SelfMfaTypeUnregisterRequest;
}
export declare class UnregisterMfaForSelfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
}
