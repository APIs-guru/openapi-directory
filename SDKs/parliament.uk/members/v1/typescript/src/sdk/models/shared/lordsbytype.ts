import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Party } from "./party";



export class LordsByType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bishop" })
  bishop?: number;

  @SpeakeasyMetadata({ data: "json, name=hereditary" })
  hereditary?: number;

  @SpeakeasyMetadata({ data: "json, name=life" })
  life?: number;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party?: Party;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
