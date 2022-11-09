import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MarkedEpisodeEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=episode" })
  episode?: Map<string, any>;
}


export class MarkedEpisode extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: MarkedEpisodeEmbedded;

  @Metadata({ data: "json, name=episode_id" })
  episodeId?: number;

  @Metadata({ data: "json, name=marked_at" })
  markedAt?: number;

  @Metadata({ data: "json, name=type" })
  type?: any;
}
