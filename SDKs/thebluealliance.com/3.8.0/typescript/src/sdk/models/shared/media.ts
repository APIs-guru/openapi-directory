import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MediaTypeEnum {
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


// Media
/** 
 * The `Media` object contains a reference for most any media associated with a team or event on TBA.
**/
export class Media extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=direct_url" })
  directUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=foreign_key" })
  foreignKey: string;

  @SpeakeasyMetadata({ data: "json, name=preferred" })
  preferred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: MediaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=view_url" })
  viewUrl?: string;
}
