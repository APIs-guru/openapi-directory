import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StringItemsWrapper extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items" })
  items?: string[];
}
