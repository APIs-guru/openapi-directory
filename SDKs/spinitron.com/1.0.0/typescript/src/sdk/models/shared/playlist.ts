import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";



export class PlaylistLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=persona" })
  persona?: Link;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: Link;

  @SpeakeasyMetadata({ data: "json, name=show" })
  show?: Link;

  @SpeakeasyMetadata({ data: "json, name=spins" })
  spins?: Link;
}


export class Playlist extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: PlaylistLinks;

  @SpeakeasyMetadata({ data: "json, name=automation" })
  automation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "json, name=episode_description" })
  episodeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=episode_name" })
  episodeName?: string;

  @SpeakeasyMetadata({ data: "json, name=hide_dj" })
  hideDj?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=persona_id" })
  personaId?: number;

  @SpeakeasyMetadata({ data: "json, name=show_id" })
  showId?: number;

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
