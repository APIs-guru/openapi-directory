import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}
