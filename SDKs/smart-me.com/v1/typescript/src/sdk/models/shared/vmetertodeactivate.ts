import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VMeterToDeactivate
/** 
 * Deactivates a virtual Meter
**/
export class VMeterToDeactivate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ID, form, name=ID;" })
  id?: string;
}
