import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateWebChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class UpdateWebChannelPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateWebChannelUpdateWebChannelRequest extends SpeakeasyBase {
    chatStatus?: shared.WebChannelEnumChatStatusEnum;
    postEngagementData?: string;
}
export declare class UpdateWebChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateWebChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateWebChannelPathParams;
    request?: UpdateWebChannelUpdateWebChannelRequest;
    security: UpdateWebChannelSecurity;
}
export declare class UpdateWebChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1WebChannel?: shared.FlexV1WebChannel;
}
