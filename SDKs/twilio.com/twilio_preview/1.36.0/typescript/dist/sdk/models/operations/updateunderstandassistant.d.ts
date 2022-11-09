import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEUNDERSTANDASSISTANT_SERVERS: string[];
export declare class UpdateUnderstandAssistantPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateUnderstandAssistantUpdateUnderstandAssistantRequest extends SpeakeasyBase {
    callbackEvents?: string;
    callbackUrl?: string;
    fallbackActions?: any;
    friendlyName?: string;
    initiationActions?: any;
    logQueries?: boolean;
    styleSheet?: any;
    uniqueName?: string;
}
export declare class UpdateUnderstandAssistantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateUnderstandAssistantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateUnderstandAssistantPathParams;
    request?: UpdateUnderstandAssistantUpdateUnderstandAssistantRequest;
    security: UpdateUnderstandAssistantSecurity;
}
export declare class UpdateUnderstandAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistant?: shared.PreviewUnderstandAssistant;
}
