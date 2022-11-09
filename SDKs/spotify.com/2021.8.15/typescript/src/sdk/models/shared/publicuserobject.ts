import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExternalUrlObject } from "./externalurlobject";
import { FollowersObject } from "./followersobject";
import { ImageObject } from "./imageobject";


// PublicUserObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-publicuserobject - Find more info on the official Spotify Web API Reference
**/
export class PublicUserObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=external_urls" })
  externalUrls?: ExternalUrlObject;

  @Metadata({ data: "json, name=followers" })
  followers?: FollowersObject;

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=images", elemType: shared.ImageObject })
  images?: ImageObject[];

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
