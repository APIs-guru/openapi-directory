import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchInteractionChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchInteractionChannelPathParams extends SpeakeasyBase {
    interactionSid: string;
    sid: string;
}
export declare class FetchInteractionChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchInteractionChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchInteractionChannelPathParams;
    security: FetchInteractionChannelSecurity;
}
export declare class FetchInteractionChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1InteractionInteractionChannel?: shared.FlexV1InteractionInteractionChannel;
}
