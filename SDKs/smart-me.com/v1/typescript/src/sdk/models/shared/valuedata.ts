import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValueData
/** 
 * API Container for a (Device) Value
**/
export class ValueData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Obis" })
  obis?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}
