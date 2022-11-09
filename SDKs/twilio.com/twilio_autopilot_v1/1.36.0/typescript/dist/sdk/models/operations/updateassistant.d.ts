import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEASSISTANT_SERVERS: string[];
export declare class UpdateAssistantPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateAssistantUpdateAssistantRequest extends SpeakeasyBase {
    callbackEvents?: string;
    callbackUrl?: string;
    defaults?: any;
    developmentStage?: string;
    friendlyName?: string;
    logQueries?: boolean;
    styleSheet?: any;
    uniqueName?: string;
}
export declare class UpdateAssistantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateAssistantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateAssistantPathParams;
    request?: UpdateAssistantUpdateAssistantRequest;
    security: UpdateAssistantSecurity;
}
export declare class UpdateAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1Assistant?: shared.AutopilotV1Assistant;
}
