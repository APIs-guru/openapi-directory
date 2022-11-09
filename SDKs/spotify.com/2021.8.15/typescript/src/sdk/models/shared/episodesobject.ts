import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EpisodeObject } from "./episodeobject";


export class EpisodesObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=episodes", elemType: shared.EpisodeObject })
  episodes?: EpisodeObject[];
}
