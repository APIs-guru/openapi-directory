import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WebhookVerificationKeyGetRequest extends SpeakeasyBase {
    request: shared.WebhookVerificationKeyGetRequest;
}
export declare class WebhookVerificationKeyGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhookVerificationKeyGetResponse?: Map<string, any>;
}
