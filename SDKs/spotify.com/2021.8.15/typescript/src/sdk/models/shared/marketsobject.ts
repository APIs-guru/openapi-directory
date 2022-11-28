import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MarketsObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=markets" })
  markets?: string[];
}
