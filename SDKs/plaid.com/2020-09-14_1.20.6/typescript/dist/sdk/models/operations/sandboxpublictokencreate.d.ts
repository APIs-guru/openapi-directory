import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SandboxPublicTokenCreateRequest extends SpeakeasyBase {
    request: shared.SandboxPublicTokenCreateRequest;
}
export declare class SandboxPublicTokenCreateResponse extends SpeakeasyBase {
    contentType: string;
    error?: Map<string, any>;
    sandboxPublicTokenCreateResponse?: Map<string, any>;
    statusCode: number;
}
