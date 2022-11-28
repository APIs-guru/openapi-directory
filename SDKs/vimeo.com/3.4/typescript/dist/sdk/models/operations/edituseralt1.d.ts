import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EditUserAlt1RequestBodyVideosPrivacyCommentsEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Nobody = "nobody"
}
export declare enum EditUserAlt1RequestBodyVideosPrivacyEmbedEnum {
    Private = "private",
    Public = "public",
    Whitelist = "whitelist"
}
export declare enum EditUserAlt1RequestBodyVideosPrivacyViewEnum {
    Anybody = "anybody",
    Contacts = "contacts",
    Disable = "disable",
    Nobody = "nobody",
    Password = "password",
    Unlisted = "unlisted",
    Users = "users"
}
export declare class EditUserAlt1RequestBodyVideosPrivacy extends SpeakeasyBase {
    add?: boolean;
    comments?: EditUserAlt1RequestBodyVideosPrivacyCommentsEnum;
    download?: boolean;
    embed?: EditUserAlt1RequestBodyVideosPrivacyEmbedEnum;
    view?: EditUserAlt1RequestBodyVideosPrivacyViewEnum;
}
export declare class EditUserAlt1RequestBodyVideos extends SpeakeasyBase {
    privacy?: EditUserAlt1RequestBodyVideosPrivacy;
}
export declare class EditUserAlt1RequestBody extends SpeakeasyBase {
    bio?: string;
    contentFilter?: string[];
    link?: string;
    location?: string;
    name?: string;
    password?: string;
    videos?: EditUserAlt1RequestBodyVideos;
}
export declare class EditUserAlt1Request extends SpeakeasyBase {
    request?: EditUserAlt1RequestBody;
}
export declare class EditUserAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
