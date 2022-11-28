import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUnderstandTaskServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandTaskPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class FetchUnderstandTaskSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUnderstandTaskRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUnderstandTaskPathParams;
    security: FetchUnderstandTaskSecurity;
}
export declare class FetchUnderstandTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantTask?: shared.PreviewUnderstandAssistantTask;
}
