import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MarkedEpisodeEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=episode" })
  episode?: Map<string, any>;
}


export class MarkedEpisodeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: MarkedEpisodeEmbedded;

  @SpeakeasyMetadata({ data: "json, name=marked_at" })
  markedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: any;
}


export class MarkedEpisode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: MarkedEpisodeEmbedded;

  @SpeakeasyMetadata({ data: "json, name=episode_id" })
  episodeId?: number;

  @SpeakeasyMetadata({ data: "json, name=marked_at" })
  markedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: any;
}
