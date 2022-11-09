import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATECOMPOSITIONHOOK_SERVERS: string[];
export declare class UpdateCompositionHookPathParams extends SpeakeasyBase {
    sid: string;
}
export declare enum UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateCompositionHookUpdateCompositionHookRequest extends SpeakeasyBase {
    audioSources?: string[];
    audioSourcesExcluded?: string[];
    enabled?: boolean;
    format?: shared.CompositionHookEnumFormatEnum;
    friendlyName: string;
    resolution?: string;
    statusCallback?: string;
    statusCallbackMethod?: UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum;
    trim?: boolean;
    videoLayout?: any;
}
export declare class UpdateCompositionHookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateCompositionHookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateCompositionHookPathParams;
    request?: UpdateCompositionHookUpdateCompositionHookRequest;
    security: UpdateCompositionHookSecurity;
}
export declare class UpdateCompositionHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1CompositionHook?: shared.VideoV1CompositionHook;
}
