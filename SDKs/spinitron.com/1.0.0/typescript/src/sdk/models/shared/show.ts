import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Link } from "./link";
import { Link } from "./link";
import { Link } from "./link";


export class ShowLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=personas", elemType: shared.Link })
  personas?: Link[];

  @Metadata({ data: "json, name=playlists" })
  playlists?: Link;

  @Metadata({ data: "json, name=self" })
  self?: Link;
}


// Show
/** 
 * A `Show` object describes one occurrence of a radio program. A result set may contain multiple occurrences of the same show with difference `start` and `end` values.
**/
export class Show extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: ShowLinks;

  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=end" })
  end?: Date;

  @Metadata({ data: "json, name=hide_dj" })
  hideDj?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=one_off" })
  oneOff?: boolean;

  @Metadata({ data: "json, name=since" })
  since?: number;

  @Metadata({ data: "json, name=start" })
  start?: Date;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
