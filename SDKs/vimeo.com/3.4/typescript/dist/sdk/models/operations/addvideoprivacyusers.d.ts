import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoPrivacyUsersPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class AddVideoPrivacyUsersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoPrivacyUsersRequest extends SpeakeasyBase {
    pathParams: AddVideoPrivacyUsersPathParams;
    security: AddVideoPrivacyUsersSecurity;
}
export declare class AddVideoPrivacyUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    users?: shared.User[];
}
