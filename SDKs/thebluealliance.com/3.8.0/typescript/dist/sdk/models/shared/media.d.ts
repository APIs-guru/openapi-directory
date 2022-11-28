import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MediaTypeEnum {
    Youtube = "youtube",
    Cdphotothread = "cdphotothread",
    Imgur = "imgur",
    FacebookProfile = "facebook-profile",
    YoutubeChannel = "youtube-channel",
    TwitterProfile = "twitter-profile",
    GithubProfile = "github-profile",
    InstagramProfile = "instagram-profile",
    PeriscopeProfile = "periscope-profile",
    Grabcad = "grabcad",
    InstagramImage = "instagram-image",
    ExternalLink = "external-link",
    Avatar = "avatar"
}
/**
 * The `Media` object contains a reference for most any media associated with a team or event on TBA.
**/
export declare class Media extends SpeakeasyBase {
    details?: Map<string, any>;
    directUrl?: string;
    foreignKey: string;
    preferred?: boolean;
    type: MediaTypeEnum;
    viewUrl?: string;
}
