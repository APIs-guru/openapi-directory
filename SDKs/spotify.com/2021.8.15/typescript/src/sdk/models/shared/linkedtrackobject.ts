import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternalUrlObject } from "./externalurlobject";



// LinkedTrackObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-linkedtrackobject - Find more info on the official Spotify Web API Reference
**/
export class LinkedTrackObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=external_urls" })
  externalUrls?: ExternalUrlObject;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
