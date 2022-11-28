import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternalUrlObject } from "./externalurlobject";
import { ImageObject } from "./imageobject";
import { EpisodeRestrictionObject } from "./episoderestrictionobject";
import { ResumePointObject } from "./resumepointobject";
import { SimplifiedShowObject } from "./simplifiedshowobject";



// EpisodeObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-episodeobject - Find more info on the official Spotify Web API Reference
**/
export class EpisodeObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_preview_url" })
  audioPreviewUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=duration_ms" })
  durationMs?: number;

  @SpeakeasyMetadata({ data: "json, name=explicit" })
  explicit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=external_urls" })
  externalUrls?: ExternalUrlObject;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=html_description" })
  htmlDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: ImageObject })
  images?: ImageObject[];

  @SpeakeasyMetadata({ data: "json, name=is_externally_hosted" })
  isExternallyHosted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_playable" })
  isPlayable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=release_date" })
  releaseDate?: string;

  @SpeakeasyMetadata({ data: "json, name=release_date_precision" })
  releaseDatePrecision?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictions" })
  restrictions?: EpisodeRestrictionObject;

  @SpeakeasyMetadata({ data: "json, name=resume_point" })
  resumePoint?: ResumePointObject;

  @SpeakeasyMetadata({ data: "json, name=show" })
  show?: SimplifiedShowObject;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
