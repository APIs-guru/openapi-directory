import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteCompositionHookServerList: readonly ["https://video.twilio.com"];
export declare class DeleteCompositionHookPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteCompositionHookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteCompositionHookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteCompositionHookPathParams;
    security: DeleteCompositionHookSecurity;
}
export declare class DeleteCompositionHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
