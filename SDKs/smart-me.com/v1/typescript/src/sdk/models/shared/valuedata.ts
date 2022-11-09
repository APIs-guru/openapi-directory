import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValueData
/** 
 * API Container for a (Device) Value
**/
export class ValueData extends SpeakeasyBase {
  @Metadata({ data: "json, name=Obis" })
  obis?: string;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}
