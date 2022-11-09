import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SandboxItemResetLoginRequest extends SpeakeasyBase {
    request: shared.SandboxItemResetLoginRequest;
}
export declare class SandboxItemResetLoginResponse extends SpeakeasyBase {
    contentType: string;
    sandboxItemResetLoginResponse?: Map<string, any>;
    statusCode: number;
}
