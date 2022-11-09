import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHINTERACTION_SERVERS: string[];
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
