import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateChannelRequestBodyPrivacyEnum {
    Anybody = "anybody",
    Moderators = "moderators",
    User = "user"
}
export declare class CreateChannelRequestBody extends SpeakeasyBase {
    description?: string;
    link?: string;
    name: string;
    privacy: CreateChannelRequestBodyPrivacyEnum;
}
export declare class CreateChannelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateChannelRequest extends SpeakeasyBase {
    request: CreateChannelRequestBody;
    security: CreateChannelSecurity;
}
export declare class CreateChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    channel?: shared.Channel;
    legacyError?: shared.LegacyError;
}
