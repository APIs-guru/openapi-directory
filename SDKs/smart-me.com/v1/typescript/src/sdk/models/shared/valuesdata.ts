import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValueData } from "./valuedata";


// ValuesData
/** 
 * API Container for a Meter Value
**/
export class ValuesData extends SpeakeasyBase {
  @Metadata({ data: "json, name=Date" })
  date?: Date;

  @Metadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=Values", elemType: shared.ValueData })
  values?: ValueData[];
}
