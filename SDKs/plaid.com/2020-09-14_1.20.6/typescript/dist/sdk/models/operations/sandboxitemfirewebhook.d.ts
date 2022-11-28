import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SandboxItemFireWebhookRequest extends SpeakeasyBase {
    request: shared.SandboxItemFireWebhookRequest;
}
export declare class SandboxItemFireWebhookResponse extends SpeakeasyBase {
    contentType: string;
    error?: Map<string, any>;
    sandboxItemFireWebhookResponse?: Map<string, any>;
    statusCode: number;
}
