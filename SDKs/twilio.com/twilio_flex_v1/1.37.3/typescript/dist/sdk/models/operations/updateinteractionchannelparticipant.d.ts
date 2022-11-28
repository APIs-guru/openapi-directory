import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateInteractionChannelParticipantServerList: readonly ["https://flex-api.twilio.com"];
export declare class UpdateInteractionChannelParticipantPathParams extends SpeakeasyBase {
    channelSid: string;
    interactionSid: string;
    sid: string;
}
export declare class UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest extends SpeakeasyBase {
    status: shared.InteractionChannelParticipantEnumStatusEnum;
}
export declare class UpdateInteractionChannelParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateInteractionChannelParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateInteractionChannelParticipantPathParams;
    request?: UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest;
    security: UpdateInteractionChannelParticipantSecurity;
}
export declare class UpdateInteractionChannelParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1InteractionInteractionChannelInteractionChannelParticipant?: shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant;
}
