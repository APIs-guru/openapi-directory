import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetChannelPrivacyUsersPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare class SetChannelPrivacyUsersRequestBody extends SpeakeasyBase {
    users: string[];
}
export declare class SetChannelPrivacyUsersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class SetChannelPrivacyUsersRequest extends SpeakeasyBase {
    pathParams: SetChannelPrivacyUsersPathParams;
    request: SetChannelPrivacyUsersRequestBody;
    security: SetChannelPrivacyUsersSecurity;
}
export declare class SetChannelPrivacyUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    users?: shared.User[];
}
