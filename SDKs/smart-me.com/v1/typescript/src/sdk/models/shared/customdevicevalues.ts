import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomDeviceValues
/** 
 * Container Class for the Custom Device Values
**/
export class CustomDeviceValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}
