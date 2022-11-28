import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchCompositionServerList: readonly ["https://video.twilio.com"];
export declare class FetchCompositionPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchCompositionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCompositionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchCompositionPathParams;
    security: FetchCompositionSecurity;
}
export declare class FetchCompositionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1Composition?: shared.VideoV1Composition;
}
