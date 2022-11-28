import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteUnderstandFieldTypeServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteUnderstandFieldTypePathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class DeleteUnderstandFieldTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUnderstandFieldTypeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUnderstandFieldTypePathParams;
    security: DeleteUnderstandFieldTypeSecurity;
}
export declare class DeleteUnderstandFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
