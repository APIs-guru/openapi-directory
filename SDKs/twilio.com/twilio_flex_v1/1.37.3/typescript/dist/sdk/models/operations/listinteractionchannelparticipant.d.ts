import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListInteractionChannelParticipantServerList: readonly ["https://flex-api.twilio.com"];
export declare class ListInteractionChannelParticipantPathParams extends SpeakeasyBase {
    channelSid: string;
    interactionSid: string;
}
export declare class ListInteractionChannelParticipantQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListInteractionChannelParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListInteractionChannelParticipantListInteractionChannelParticipantResponse extends SpeakeasyBase {
    meta?: ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta;
    participants?: shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant[];
}
export declare class ListInteractionChannelParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListInteractionChannelParticipantPathParams;
    queryParams: ListInteractionChannelParticipantQueryParams;
    security: ListInteractionChannelParticipantSecurity;
}
export declare class ListInteractionChannelParticipantResponse extends SpeakeasyBase {
    contentType: string;
    listInteractionChannelParticipantResponse?: ListInteractionChannelParticipantListInteractionChannelParticipantResponse;
    statusCode: number;
}
