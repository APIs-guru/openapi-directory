import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MarketsObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=markets" })
  markets?: string[];
}
