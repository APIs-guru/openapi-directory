import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHASSISTANT_SERVERS: string[];
export declare class FetchAssistantPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchAssistantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchAssistantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchAssistantPathParams;
    security: FetchAssistantSecurity;
}
export declare class FetchAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1Assistant?: shared.AutopilotV1Assistant;
}
