import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUnderstandStyleSheetServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandStyleSheetPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class FetchUnderstandStyleSheetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUnderstandStyleSheetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUnderstandStyleSheetPathParams;
    security: FetchUnderstandStyleSheetSecurity;
}
export declare class FetchUnderstandStyleSheetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantStyleSheet?: shared.PreviewUnderstandAssistantStyleSheet;
}
