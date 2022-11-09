import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEWEBCHANNEL_SERVERS: string[];
export declare class CreateWebChannelCreateWebChannelRequest extends SpeakeasyBase {
    chatFriendlyName: string;
    chatUniqueName?: string;
    customerFriendlyName: string;
    flexFlowSid: string;
    identity: string;
    preEngagementData?: string;
}
export declare class CreateWebChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateWebChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateWebChannelCreateWebChannelRequest;
    security: CreateWebChannelSecurity;
}
export declare class CreateWebChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    flexV1WebChannel?: shared.FlexV1WebChannel;
}
