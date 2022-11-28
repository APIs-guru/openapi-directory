import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCurrentUserRequestBody extends SpeakeasyBase {
    aboutMe?: string;
    digest?: string;
    digestPhotos?: number;
    firstname?: string;
    lastListingsView?: Date;
    lastname?: string;
    oldPassword?: string;
    password?: string;
    postReminders?: number;
    profileImageSource?: string;
    publicName?: number;
    publicPostSources?: string;
    showAllGroupPosts?: number;
    specialNotices?: number;
}
export declare class UpdateCurrentUserRequest extends SpeakeasyBase {
    request?: UpdateCurrentUserRequestBody;
}
export declare class UpdateCurrentUserResponse extends SpeakeasyBase {
    contentType: string;
    currentUser?: shared.CurrentUser;
    statusCode: number;
}
