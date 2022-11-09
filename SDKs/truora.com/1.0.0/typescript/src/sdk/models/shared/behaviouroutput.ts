import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Behavior } from "./behavior";


// BehaviourOutput
/** 
 * Represents behaviour search results
**/
export class BehaviourOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=behavior", elemType: shared.Behavior })
  behavior: Behavior[];

  @Metadata({ data: "json, name=self" })
  self: string;
}
