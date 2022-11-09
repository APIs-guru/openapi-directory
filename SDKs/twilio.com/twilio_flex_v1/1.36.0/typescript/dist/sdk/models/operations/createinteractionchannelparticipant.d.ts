import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEINTERACTIONCHANNELPARTICIPANT_SERVERS: string[];
export declare class CreateInteractionChannelParticipantPathParams extends SpeakeasyBase {
    channelSid: string;
    interactionSid: string;
}
export declare class CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest extends SpeakeasyBase {
    mediaProperties: any;
    type: shared.InteractionChannelParticipantEnumTypeEnum;
}
export declare class CreateInteractionChannelParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateInteractionChannelParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateInteractionChannelParticipantPathParams;
    request?: CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest;
    security: CreateInteractionChannelParticipantSecurity;
}
export declare class CreateInteractionChannelParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1InteractionInteractionChannelInteractionChannelParticipant?: shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant;
}
