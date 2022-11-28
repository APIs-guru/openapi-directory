import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchCompositionHookServerList: readonly ["https://video.twilio.com"];
export declare class FetchCompositionHookPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchCompositionHookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCompositionHookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchCompositionHookPathParams;
    security: FetchCompositionHookSecurity;
}
export declare class FetchCompositionHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1CompositionHook?: shared.VideoV1CompositionHook;
}
