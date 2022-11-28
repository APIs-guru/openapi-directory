import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PageLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=related" })
  related?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: string;
}
