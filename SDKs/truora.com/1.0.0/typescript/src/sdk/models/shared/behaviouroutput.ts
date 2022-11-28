import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Behavior } from "./behavior";



// BehaviourOutput
/** 
 * Represents behaviour search results
**/
export class BehaviourOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=behavior", elemType: Behavior })
  behavior: Behavior[];

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: string;
}
