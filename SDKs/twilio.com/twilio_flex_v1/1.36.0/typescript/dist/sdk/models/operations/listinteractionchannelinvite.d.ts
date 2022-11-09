import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTINTERACTIONCHANNELINVITE_SERVERS: string[];
export declare class ListInteractionChannelInvitePathParams extends SpeakeasyBase {
    channelSid: string;
    interactionSid: string;
}
export declare class ListInteractionChannelInviteQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListInteractionChannelInviteSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListInteractionChannelInviteRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListInteractionChannelInvitePathParams;
    queryParams: ListInteractionChannelInviteQueryParams;
    security: ListInteractionChannelInviteSecurity;
}
export declare class ListInteractionChannelInviteListInteractionChannelInviteResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListInteractionChannelInviteListInteractionChannelInviteResponse extends SpeakeasyBase {
    invites?: shared.FlexV1InteractionInteractionChannelInteractionChannelInvite[];
    meta?: ListInteractionChannelInviteListInteractionChannelInviteResponseMeta;
}
export declare class ListInteractionChannelInviteResponse extends SpeakeasyBase {
    contentType: string;
    listInteractionChannelInviteResponse?: ListInteractionChannelInviteListInteractionChannelInviteResponse;
    statusCode: number;
}
