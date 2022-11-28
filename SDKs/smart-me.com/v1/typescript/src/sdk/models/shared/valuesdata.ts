import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValueData } from "./valuedata";



// ValuesData
/** 
 * API Container for a Meter Value
**/
export class ValuesData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Values", elemType: ValueData })
  values?: ValueData[];
}
