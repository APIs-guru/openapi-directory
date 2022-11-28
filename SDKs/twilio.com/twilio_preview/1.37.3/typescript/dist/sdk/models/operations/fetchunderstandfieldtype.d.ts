import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUnderstandFieldTypeServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandFieldTypePathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class FetchUnderstandFieldTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUnderstandFieldTypeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUnderstandFieldTypePathParams;
    security: FetchUnderstandFieldTypeSecurity;
}
export declare class FetchUnderstandFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantFieldType?: shared.PreviewUnderstandAssistantFieldType;
}
