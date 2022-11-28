import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VMeterToActivate
/** 
 * Actives a virtual Meter
**/
export class VMeterToActivate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SerialNumber, form, name=SerialNumber;" })
  serialNumber?: string;
}
