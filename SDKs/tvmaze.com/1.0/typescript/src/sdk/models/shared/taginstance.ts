import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagInstanceEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=show" })
  show?: Map<string, any>;
}


export class TagInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: TagInstanceEmbedded;

  @Metadata({ data: "json, name=show_id" })
  showId?: number;
}
