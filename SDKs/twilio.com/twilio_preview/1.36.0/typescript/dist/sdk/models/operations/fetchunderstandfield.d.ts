import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHUNDERSTANDFIELD_SERVERS: string[];
export declare class FetchUnderstandFieldPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
    taskSid: string;
}
export declare class FetchUnderstandFieldSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUnderstandFieldRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUnderstandFieldPathParams;
    security: FetchUnderstandFieldSecurity;
}
export declare class FetchUnderstandFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantTaskField?: shared.PreviewUnderstandAssistantTaskField;
}
