import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EpisodeObject } from "./episodeobject";



export class EpisodesObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=episodes", elemType: EpisodeObject })
  episodes?: EpisodeObject[];
}
