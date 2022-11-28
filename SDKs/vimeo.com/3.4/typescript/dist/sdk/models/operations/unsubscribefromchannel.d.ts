import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnsubscribeFromChannelPathParams extends SpeakeasyBase {
    channelId: number;
    userId: number;
}
export declare class UnsubscribeFromChannelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class UnsubscribeFromChannelRequest extends SpeakeasyBase {
    pathParams: UnsubscribeFromChannelPathParams;
    security: UnsubscribeFromChannelSecurity;
}
export declare class UnsubscribeFromChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
