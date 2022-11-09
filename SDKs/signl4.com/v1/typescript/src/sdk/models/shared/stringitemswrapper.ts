import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StringItemsWrapper extends SpeakeasyBase {
  @Metadata({ data: "json, name=items" })
  items?: string[];
}
