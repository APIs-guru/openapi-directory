import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditUserPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum EditUserRequestBodyVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
export declare enum EditUserRequestBodyVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
export declare enum EditUserRequestBodyVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class EditUserRequestBodyVideosPrivacy extends SpeakeasyBase {
    add?: boolean;
    comments?: EditUserRequestBodyVideosPrivacyCommentsEnum;
    download?: boolean;
    embed?: EditUserRequestBodyVideosPrivacyEmbedEnum;
    view?: EditUserRequestBodyVideosPrivacyViewEnum;
}
export declare class EditUserRequestBodyVideos extends SpeakeasyBase {
    privacy?: EditUserRequestBodyVideosPrivacy;
}
export declare class EditUserRequestBody extends SpeakeasyBase {
    bio?: string;
    contentFilter?: string[];
    link?: string;
    location?: string;
    name?: string;
    password?: string;
    videos?: EditUserRequestBodyVideos;
}
export declare class EditUserRequest extends SpeakeasyBase {
    pathParams: EditUserPathParams;
    request?: EditUserRequestBody;
}
export declare class EditUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
