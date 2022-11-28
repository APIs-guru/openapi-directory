import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveChannelModeratorsPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare class RemoveChannelModeratorsRequestBody extends SpeakeasyBase {
    userUri: string;
}
export declare class RemoveChannelModeratorsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class RemoveChannelModeratorsRequest extends SpeakeasyBase {
    pathParams: RemoveChannelModeratorsPathParams;
    request: RemoveChannelModeratorsRequestBody;
    security: RemoveChannelModeratorsSecurity;
}
export declare class RemoveChannelModeratorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    user?: shared.User;
}
