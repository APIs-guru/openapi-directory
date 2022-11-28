import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditChannelPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare enum EditChannelRequestBodyPrivacyEnum {
    Anybody = "anybody",
    Moderators = "moderators",
    Users = "users"
}
export declare class EditChannelRequestBody extends SpeakeasyBase {
    description?: string;
    link?: string;
    name?: string;
    privacy?: EditChannelRequestBodyPrivacyEnum;
}
export declare class EditChannelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class EditChannelRequest extends SpeakeasyBase {
    pathParams: EditChannelPathParams;
    request?: EditChannelRequestBody;
    security: EditChannelSecurity;
}
export declare class EditChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    channel?: shared.Channel;
    legacyError?: shared.LegacyError;
}
