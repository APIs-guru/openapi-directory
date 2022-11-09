import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExplicitContentSettingsObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-explicitcontentsettingsobject - Find more info on the official Spotify Web API Reference
**/
export class ExplicitContentSettingsObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter_enabled" })
  filterEnabled?: boolean;

  @Metadata({ data: "json, name=filter_locked" })
  filterLocked?: boolean;
}
