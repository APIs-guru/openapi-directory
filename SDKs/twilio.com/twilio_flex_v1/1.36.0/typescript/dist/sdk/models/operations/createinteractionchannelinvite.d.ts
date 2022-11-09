import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEINTERACTIONCHANNELINVITE_SERVERS: string[];
export declare class CreateInteractionChannelInvitePathParams extends SpeakeasyBase {
    channelSid: string;
    interactionSid: string;
}
export declare class CreateInteractionChannelInviteCreateInteractionChannelInviteRequest extends SpeakeasyBase {
    routing: any;
}
export declare class CreateInteractionChannelInviteSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateInteractionChannelInviteRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateInteractionChannelInvitePathParams;
    request?: CreateInteractionChannelInviteCreateInteractionChannelInviteRequest;
    security: CreateInteractionChannelInviteSecurity;
}
export declare class CreateInteractionChannelInviteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1InteractionInteractionChannelInteractionChannelInvite?: shared.FlexV1InteractionInteractionChannelInteractionChannelInvite;
}
