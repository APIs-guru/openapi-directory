import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubscribeToChannelPathParams extends SpeakeasyBase {
    channelId: number;
    userId: number;
}
export declare class SubscribeToChannelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class SubscribeToChannelRequest extends SpeakeasyBase {
    pathParams: SubscribeToChannelPathParams;
    security: SubscribeToChannelSecurity;
}
export declare class SubscribeToChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
