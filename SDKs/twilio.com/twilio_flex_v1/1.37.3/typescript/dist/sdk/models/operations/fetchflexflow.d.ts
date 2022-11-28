import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchFlexFlowServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchFlexFlowPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchFlexFlowSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchFlexFlowRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchFlexFlowPathParams;
    security: FetchFlexFlowSecurity;
}
export declare class FetchFlexFlowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1FlexFlow?: shared.FlexV1FlexFlow;
}
