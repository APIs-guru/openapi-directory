import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddChannelModeratorsPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare class AddChannelModeratorsRequestBody extends SpeakeasyBase {
    userUri: string;
}
export declare class AddChannelModeratorsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddChannelModeratorsRequest extends SpeakeasyBase {
    pathParams: AddChannelModeratorsPathParams;
    request: AddChannelModeratorsRequestBody;
    security: AddChannelModeratorsSecurity;
}
export declare class AddChannelModeratorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    legacyError?: shared.LegacyError;
}
