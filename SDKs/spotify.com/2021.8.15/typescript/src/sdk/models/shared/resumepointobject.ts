import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResumePointObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-resumepointobject - Find more info on the official Spotify Web API Reference
**/
export class ResumePointObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fully_played" })
  fullyPlayed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resume_position_ms" })
  resumePositionMs?: number;
}
