import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteUnderstandModelBuildServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteUnderstandModelBuildPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class DeleteUnderstandModelBuildSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUnderstandModelBuildRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUnderstandModelBuildPathParams;
    security: DeleteUnderstandModelBuildSecurity;
}
export declare class DeleteUnderstandModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
