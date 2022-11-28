import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SectionObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#section-object - Find more info on the official Spotify Web API Reference
**/
export class SectionObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: number;

  @SpeakeasyMetadata({ data: "json, name=key_confidence" })
  keyConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=loudness" })
  loudness?: number;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: number;

  @SpeakeasyMetadata({ data: "json, name=mode_confidence" })
  modeConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=tempo" })
  tempo?: number;

  @SpeakeasyMetadata({ data: "json, name=tempo_confidence" })
  tempoConfidence?: number;

  @SpeakeasyMetadata({ data: "json, name=time_signature" })
  timeSignature?: number;

  @SpeakeasyMetadata({ data: "json, name=time_signature_confidence" })
  timeSignatureConfidence?: number;
}
