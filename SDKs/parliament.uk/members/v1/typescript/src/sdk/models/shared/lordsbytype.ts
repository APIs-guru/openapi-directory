import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Party } from "./party";


export class LordsByType extends SpeakeasyBase {
  @Metadata({ data: "json, name=bishop" })
  bishop?: number;

  @Metadata({ data: "json, name=hereditary" })
  hereditary?: number;

  @Metadata({ data: "json, name=life" })
  life?: number;

  @Metadata({ data: "json, name=party" })
  party?: Party;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
