import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AudioFeaturesObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-audiofeaturesobject - Find more info on the official Spotify Web API Reference
**/
export class AudioFeaturesObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=acousticness" })
  acousticness?: number;

  @Metadata({ data: "json, name=analysis_url" })
  analysisUrl?: string;

  @Metadata({ data: "json, name=danceability" })
  danceability?: number;

  @Metadata({ data: "json, name=duration_ms" })
  durationMs?: number;

  @Metadata({ data: "json, name=energy" })
  energy?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=instrumentalness" })
  instrumentalness?: number;

  @Metadata({ data: "json, name=key" })
  key?: number;

  @Metadata({ data: "json, name=liveness" })
  liveness?: number;

  @Metadata({ data: "json, name=loudness" })
  loudness?: number;

  @Metadata({ data: "json, name=mode" })
  mode?: number;

  @Metadata({ data: "json, name=speechiness" })
  speechiness?: number;

  @Metadata({ data: "json, name=tempo" })
  tempo?: number;

  @Metadata({ data: "json, name=time_signature" })
  timeSignature?: number;

  @Metadata({ data: "json, name=track_href" })
  trackHref?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=valence" })
  valence?: number;
}
