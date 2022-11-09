import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SandboxIncomeFireWebhookRequest extends SpeakeasyBase {
    request: shared.SandboxIncomeFireWebhookRequest;
}
export declare class SandboxIncomeFireWebhookResponse extends SpeakeasyBase {
    contentType: string;
    error?: Map<string, any>;
    sandboxIncomeFireWebhookResponse?: shared.SandboxIncomeFireWebhookResponse;
    statusCode: number;
}
