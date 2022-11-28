import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";



export class ShowLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personas", elemType: Link })
  personas?: Link[];

  @SpeakeasyMetadata({ data: "json, name=playlists" })
  playlists?: Link;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: Link;
}


// Show
/** 
 * A `Show` object describes one occurrence of a radio program. A result set may contain multiple occurrences of the same show with difference `start` and `end` values.
**/
export class Show extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: ShowLinks;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "json, name=hide_dj" })
  hideDj?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=one_off" })
  oneOff?: boolean;

  @SpeakeasyMetadata({ data: "json, name=since" })
  since?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: Date;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
