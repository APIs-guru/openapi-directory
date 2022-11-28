import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateStyleSheetServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateStyleSheetPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class UpdateStyleSheetUpdateStyleSheetRequest extends SpeakeasyBase {
    styleSheet?: any;
}
export declare class UpdateStyleSheetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateStyleSheetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateStyleSheetPathParams;
    request?: UpdateStyleSheetUpdateStyleSheetRequest;
    security: UpdateStyleSheetSecurity;
}
export declare class UpdateStyleSheetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantStyleSheet?: shared.AutopilotV1AssistantStyleSheet;
}
