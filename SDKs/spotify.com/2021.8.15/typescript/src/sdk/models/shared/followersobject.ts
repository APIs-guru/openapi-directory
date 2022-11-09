import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FollowersObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-followersobject - Find more info on the official Spotify Web API Reference
**/
export class FollowersObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
