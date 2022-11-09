import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ShowFollowEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=show" })
  show?: Map<string, any>;
}


export class ShowFollow extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: ShowFollowEmbedded;

  @Metadata({ data: "json, name=show_id" })
  showId?: number;
}
