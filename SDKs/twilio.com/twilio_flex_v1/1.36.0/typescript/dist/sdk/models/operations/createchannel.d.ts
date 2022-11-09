import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATECHANNEL_SERVERS: string[];
export declare class CreateChannelCreateChannelRequest extends SpeakeasyBase {
    chatFriendlyName: string;
    chatUniqueName?: string;
    chatUserFriendlyName: string;
    flexFlowSid: string;
    identity: string;
    longLived?: boolean;
    preEngagementData?: string;
    target?: string;
    taskAttributes?: string;
    taskSid?: string;
}
export declare class CreateChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateChannelCreateChannelRequest;
    security: CreateChannelSecurity;
}
export declare class CreateChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1Channel?: shared.FlexV1Channel;
}
