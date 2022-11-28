import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ShowFollowEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=show" })
  show?: Map<string, any>;
}


export class ShowFollow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: ShowFollowEmbedded;

  @SpeakeasyMetadata({ data: "json, name=show_id" })
  showId?: number;
}
