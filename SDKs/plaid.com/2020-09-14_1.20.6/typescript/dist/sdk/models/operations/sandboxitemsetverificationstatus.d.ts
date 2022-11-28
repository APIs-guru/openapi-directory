import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SandboxItemSetVerificationStatusRequest extends SpeakeasyBase {
    request: shared.SandboxItemSetVerificationStatusRequest;
}
export declare class SandboxItemSetVerificationStatusResponse extends SpeakeasyBase {
    contentType: string;
    sandboxItemSetVerificationStatusResponse?: Map<string, any>;
    statusCode: number;
}
