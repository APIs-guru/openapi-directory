import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SandboxBankTransferFireWebhookRequest extends SpeakeasyBase {
    request: shared.SandboxBankTransferFireWebhookRequest;
}
export declare class SandboxBankTransferFireWebhookResponse extends SpeakeasyBase {
    contentType: string;
    error?: Map<string, any>;
    sandboxBankTransferFireWebhookResponse?: shared.SandboxBankTransferFireWebhookResponse;
    statusCode: number;
}
