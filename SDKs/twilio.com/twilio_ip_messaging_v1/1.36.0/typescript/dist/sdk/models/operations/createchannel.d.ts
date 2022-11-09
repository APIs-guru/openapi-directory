import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATECHANNEL_SERVERS: string[];
export declare class CreateChannelPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateChannelCreateChannelRequest extends SpeakeasyBase {
    attributes?: string;
    friendlyName?: string;
    type?: shared.ChannelEnumChannelTypeEnum;
    uniqueName?: string;
}
export declare class CreateChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateChannelPathParams;
    request?: CreateChannelCreateChannelRequest;
    security: CreateChannelSecurity;
}
export declare class CreateChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV1ServiceChannel?: shared.IpMessagingV1ServiceChannel;
}
