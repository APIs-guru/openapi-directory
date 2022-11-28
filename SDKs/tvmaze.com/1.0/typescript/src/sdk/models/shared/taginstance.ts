import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagInstanceEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=show" })
  show?: Map<string, any>;
}


export class TagInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: TagInstanceEmbedded;

  @SpeakeasyMetadata({ data: "json, name=show_id" })
  showId?: number;
}
