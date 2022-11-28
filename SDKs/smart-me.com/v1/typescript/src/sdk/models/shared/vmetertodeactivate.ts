import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VMeterToDeactivate
/** 
 * Deactivates a virtual Meter
**/
export class VMeterToDeactivate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ID, form, name=ID;" })
  id?: string;
}
