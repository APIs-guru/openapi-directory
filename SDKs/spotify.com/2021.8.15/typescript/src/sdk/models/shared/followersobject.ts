import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FollowersObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-followersobject - Find more info on the official Spotify Web API Reference
**/
export class FollowersObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
