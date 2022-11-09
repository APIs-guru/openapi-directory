import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// V1OrderHistoryEntry
/** 
 * V1OrderHistoryEntry
**/
export class V1OrderHistoryEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;
}
