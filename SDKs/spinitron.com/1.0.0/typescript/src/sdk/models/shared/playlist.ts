import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Link } from "./link";
import { Link } from "./link";
import { Link } from "./link";
import { Link } from "./link";


export class PlaylistLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=persona" })
  persona?: Link;

  @Metadata({ data: "json, name=self" })
  self?: Link;

  @Metadata({ data: "json, name=show" })
  show?: Link;

  @Metadata({ data: "json, name=spins" })
  spins?: Link;
}


export class Playlist extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: PlaylistLinks;

  @Metadata({ data: "json, name=automation" })
  automation?: boolean;

  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=end" })
  end?: Date;

  @Metadata({ data: "json, name=episode_description" })
  episodeDescription?: string;

  @Metadata({ data: "json, name=episode_name" })
  episodeName?: string;

  @Metadata({ data: "json, name=hide_dj" })
  hideDj?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=persona_id" })
  personaId?: number;

  @Metadata({ data: "json, name=show_id" })
  showId?: number;

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
