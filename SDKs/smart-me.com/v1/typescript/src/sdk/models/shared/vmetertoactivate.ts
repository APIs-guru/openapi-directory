import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VMeterToActivate
/** 
 * Actives a virtual Meter
**/
export class VMeterToActivate extends SpeakeasyBase {
  @Metadata({ data: "json, name=SerialNumber, form, name=SerialNumber;" })
  serialNumber?: string;
}
