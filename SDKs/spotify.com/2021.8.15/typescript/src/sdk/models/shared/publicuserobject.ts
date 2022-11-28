import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternalUrlObject } from "./externalurlobject";
import { FollowersObject } from "./followersobject";
import { ImageObject } from "./imageobject";



// PublicUserObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-publicuserobject - Find more info on the official Spotify Web API Reference
**/
export class PublicUserObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=external_urls" })
  externalUrls?: ExternalUrlObject;

  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers?: FollowersObject;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: ImageObject })
  images?: ImageObject[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
