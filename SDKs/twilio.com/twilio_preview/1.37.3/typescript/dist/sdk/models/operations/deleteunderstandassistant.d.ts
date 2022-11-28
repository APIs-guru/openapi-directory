import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteUnderstandAssistantServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteUnderstandAssistantPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteUnderstandAssistantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUnderstandAssistantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUnderstandAssistantPathParams;
    security: DeleteUnderstandAssistantSecurity;
}
export declare class DeleteUnderstandAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
