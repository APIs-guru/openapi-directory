import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEINTERACTIONCHANNEL_SERVERS: string[];
export declare class UpdateInteractionChannelPathParams extends SpeakeasyBase {
    interactionSid: string;
    sid: string;
}
export declare class UpdateInteractionChannelUpdateInteractionChannelRequest extends SpeakeasyBase {
    routing?: any;
    status: shared.InteractionChannelEnumStatusEnum;
}
export declare class UpdateInteractionChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateInteractionChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateInteractionChannelPathParams;
    request?: UpdateInteractionChannelUpdateInteractionChannelRequest;
    security: UpdateInteractionChannelSecurity;
}
export declare class UpdateInteractionChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1InteractionInteractionChannel?: shared.FlexV1InteractionInteractionChannel;
}
