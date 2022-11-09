import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEASSISTANT_SERVERS: string[];
export declare class DeleteAssistantPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteAssistantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteAssistantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteAssistantPathParams;
    security: DeleteAssistantSecurity;
}
export declare class DeleteAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
