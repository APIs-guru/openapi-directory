import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplaceChannelModeratorsPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare class ReplaceChannelModeratorsRequestBody extends SpeakeasyBase {
    userUri: string;
}
export declare class ReplaceChannelModeratorsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class ReplaceChannelModeratorsRequest extends SpeakeasyBase {
    pathParams: ReplaceChannelModeratorsPathParams;
    request: ReplaceChannelModeratorsRequestBody;
    security: ReplaceChannelModeratorsSecurity;
}
export declare class ReplaceChannelModeratorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    legacyError?: shared.LegacyError;
    users?: shared.User[];
}
