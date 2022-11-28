import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchFlowServerList: readonly ["https://studio.twilio.com"];
export declare class FetchFlowPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchFlowSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchFlowRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchFlowPathParams;
    security: FetchFlowSecurity;
}
export declare class FetchFlowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    studioV1Flow?: shared.StudioV1Flow;
}
