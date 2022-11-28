import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// State
/** 
 * State
**/
export class State extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=stateCode" })
  stateCode?: string;
}
