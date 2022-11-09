import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETECOMPOSITIONHOOK_SERVERS: string[];
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
