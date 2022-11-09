import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATECHANNEL_SERVERS: string[];
export declare class UpdateChannelPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class UpdateChannelUpdateChannelRequest extends SpeakeasyBase {
    attributes?: string;
    friendlyName?: string;
    uniqueName?: string;
}
export declare class UpdateChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateChannelPathParams;
    request?: UpdateChannelUpdateChannelRequest;
    security: UpdateChannelSecurity;
}
export declare class UpdateChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV1ServiceChannel?: shared.IpMessagingV1ServiceChannel;
}
