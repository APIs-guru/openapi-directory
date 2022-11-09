import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SectionObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#section-object - Find more info on the official Spotify Web API Reference
**/
export class SectionObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=key" })
  key?: number;

  @Metadata({ data: "json, name=key_confidence" })
  keyConfidence?: number;

  @Metadata({ data: "json, name=loudness" })
  loudness?: number;

  @Metadata({ data: "json, name=mode" })
  mode?: number;

  @Metadata({ data: "json, name=mode_confidence" })
  modeConfidence?: number;

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=tempo" })
  tempo?: number;

  @Metadata({ data: "json, name=tempo_confidence" })
  tempoConfidence?: number;

  @Metadata({ data: "json, name=time_signature" })
  timeSignature?: number;

  @Metadata({ data: "json, name=time_signature_confidence" })
  timeSignatureConfidence?: number;
}
