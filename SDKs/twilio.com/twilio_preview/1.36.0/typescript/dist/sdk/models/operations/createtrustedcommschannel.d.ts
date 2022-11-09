import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATETRUSTEDCOMMSCHANNEL_SERVERS: string[];
export declare class CreateTrustedCommsChannelPathParams extends SpeakeasyBase {
    brandedChannelSid: string;
}
export declare class CreateTrustedCommsChannelCreateTrustedCommsChannelRequest extends SpeakeasyBase {
    phoneNumberSid: string;
}
export declare class CreateTrustedCommsChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateTrustedCommsChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateTrustedCommsChannelPathParams;
    request?: CreateTrustedCommsChannelCreateTrustedCommsChannelRequest;
    security: CreateTrustedCommsChannelSecurity;
}
export declare class CreateTrustedCommsChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewTrustedCommsBrandedChannelChannel?: shared.PreviewTrustedCommsBrandedChannelChannel;
}
