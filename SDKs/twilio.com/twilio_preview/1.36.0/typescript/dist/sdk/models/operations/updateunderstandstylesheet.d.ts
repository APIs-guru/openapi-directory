import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEUNDERSTANDSTYLESHEET_SERVERS: string[];
export declare class UpdateUnderstandStyleSheetPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest extends SpeakeasyBase {
    styleSheet?: any;
}
export declare class UpdateUnderstandStyleSheetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateUnderstandStyleSheetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateUnderstandStyleSheetPathParams;
    request?: UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest;
    security: UpdateUnderstandStyleSheetSecurity;
}
export declare class UpdateUnderstandStyleSheetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantStyleSheet?: shared.PreviewUnderstandAssistantStyleSheet;
}
