import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveChannelModeratorPathParams extends SpeakeasyBase {
    channelId: number;
    userId: number;
}
export declare class RemoveChannelModeratorSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class RemoveChannelModeratorRequest extends SpeakeasyBase {
    pathParams: RemoveChannelModeratorPathParams;
    security: RemoveChannelModeratorSecurity;
}
export declare class RemoveChannelModeratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
