import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SandboxProcessorTokenCreateRequest extends SpeakeasyBase {
    request: shared.SandboxProcessorTokenCreateRequest;
}
export declare class SandboxProcessorTokenCreateResponse extends SpeakeasyBase {
    contentType: string;
    error?: Map<string, any>;
    sandboxProcessorTokenCreateResponse?: Map<string, any>;
    statusCode: number;
}
