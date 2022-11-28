import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddChannelModeratorPathParams extends SpeakeasyBase {
    channelId: number;
    userId: number;
}
export declare class AddChannelModeratorSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddChannelModeratorRequest extends SpeakeasyBase {
    pathParams: AddChannelModeratorPathParams;
    security: AddChannelModeratorSecurity;
}
export declare class AddChannelModeratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
