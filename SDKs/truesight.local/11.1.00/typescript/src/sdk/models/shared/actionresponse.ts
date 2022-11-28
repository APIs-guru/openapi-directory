import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionResponse
/** 
 * The object encapsulating the output of an operation affecting the PATROL Agent.
**/
export class ActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pslOutput?: string;
}
