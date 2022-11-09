import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSTYLESHEET_SERVERS: string[];
export declare class FetchStyleSheetPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class FetchStyleSheetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchStyleSheetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchStyleSheetPathParams;
    security: FetchStyleSheetSecurity;
}
export declare class FetchStyleSheetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantStyleSheet?: shared.AutopilotV1AssistantStyleSheet;
}
