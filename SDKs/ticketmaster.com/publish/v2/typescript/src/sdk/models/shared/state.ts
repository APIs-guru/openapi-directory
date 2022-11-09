import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// State
/** 
 * State
**/
export class State extends SpeakeasyBase {
  @Metadata({ data: "json, name=names" })
  names?: Map<string, string>;

  @Metadata({ data: "json, name=stateCode" })
  stateCode?: string;
}
