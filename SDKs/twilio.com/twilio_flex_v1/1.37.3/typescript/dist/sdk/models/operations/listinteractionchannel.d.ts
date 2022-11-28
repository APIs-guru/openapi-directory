import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListInteractionChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class ListInteractionChannelPathParams extends SpeakeasyBase {
    interactionSid: string;
}
export declare class ListInteractionChannelQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListInteractionChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListInteractionChannelListInteractionChannelResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListInteractionChannelListInteractionChannelResponse extends SpeakeasyBase {
    channels?: shared.FlexV1InteractionInteractionChannel[];
    meta?: ListInteractionChannelListInteractionChannelResponseMeta;
}
export declare class ListInteractionChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListInteractionChannelPathParams;
    queryParams: ListInteractionChannelQueryParams;
    security: ListInteractionChannelSecurity;
}
export declare class ListInteractionChannelResponse extends SpeakeasyBase {
    contentType: string;
    listInteractionChannelResponse?: ListInteractionChannelListInteractionChannelResponse;
    statusCode: number;
}
