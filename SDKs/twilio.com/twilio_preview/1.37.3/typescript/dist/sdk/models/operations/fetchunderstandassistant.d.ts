import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUnderstandAssistantServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandAssistantPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchUnderstandAssistantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUnderstandAssistantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUnderstandAssistantPathParams;
    security: FetchUnderstandAssistantSecurity;
}
export declare class FetchUnderstandAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistant?: shared.PreviewUnderstandAssistant;
}
