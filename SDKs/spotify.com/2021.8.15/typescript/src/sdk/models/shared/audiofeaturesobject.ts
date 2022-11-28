import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AudioFeaturesObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-audiofeaturesobject - Find more info on the official Spotify Web API Reference
**/
export class AudioFeaturesObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acousticness" })
  acousticness?: number;

  @SpeakeasyMetadata({ data: "json, name=analysis_url" })
  analysisUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=danceability" })
  danceability?: number;

  @SpeakeasyMetadata({ data: "json, name=duration_ms" })
  durationMs?: number;

  @SpeakeasyMetadata({ data: "json, name=energy" })
  energy?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=instrumentalness" })
  instrumentalness?: number;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: number;

  @SpeakeasyMetadata({ data: "json, name=liveness" })
  liveness?: number;

  @SpeakeasyMetadata({ data: "json, name=loudness" })
  loudness?: number;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: number;

  @SpeakeasyMetadata({ data: "json, name=speechiness" })
  speechiness?: number;

  @SpeakeasyMetadata({ data: "json, name=tempo" })
  tempo?: number;

  @SpeakeasyMetadata({ data: "json, name=time_signature" })
  timeSignature?: number;

  @SpeakeasyMetadata({ data: "json, name=track_href" })
  trackHref?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=valence" })
  valence?: number;
}
