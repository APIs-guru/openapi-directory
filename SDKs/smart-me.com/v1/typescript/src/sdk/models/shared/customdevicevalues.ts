import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomDeviceValues
/** 
 * Container Class for the Custom Device Values
**/
export class CustomDeviceValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}
