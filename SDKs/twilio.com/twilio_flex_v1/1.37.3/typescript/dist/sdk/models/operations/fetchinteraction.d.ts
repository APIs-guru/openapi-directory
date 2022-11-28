import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchInteractionServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchInteractionPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchInteractionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchInteractionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchInteractionPathParams;
    security: FetchInteractionSecurity;
}
export declare class FetchInteractionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1Interaction?: shared.FlexV1Interaction;
}
