import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExternalUrlObject } from "./externalurlobject";
import { ImageObject } from "./imageobject";
import { EpisodeRestrictionObject } from "./episoderestrictionobject";
import { ResumePointObject } from "./resumepointobject";


// SimplifiedEpisodeObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedepisodeobject - Find more info on the official Spotify Web API Reference
**/
export class SimplifiedEpisodeObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio_preview_url" })
  audioPreviewUrl?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=duration_ms" })
  durationMs?: number;

  @Metadata({ data: "json, name=explicit" })
  explicit?: boolean;

  @Metadata({ data: "json, name=external_urls" })
  externalUrls?: ExternalUrlObject;

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=html_description" })
  htmlDescription?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=images", elemType: shared.ImageObject })
  images?: ImageObject[];

  @Metadata({ data: "json, name=is_externally_hosted" })
  isExternallyHosted?: boolean;

  @Metadata({ data: "json, name=is_playable" })
  isPlayable?: boolean;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=languages" })
  languages?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=release_date" })
  releaseDate?: string;

  @Metadata({ data: "json, name=release_date_precision" })
  releaseDatePrecision?: string;

  @Metadata({ data: "json, name=restrictions" })
  restrictions?: EpisodeRestrictionObject;

  @Metadata({ data: "json, name=resume_point" })
  resumePoint?: ResumePointObject;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
