import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomDeviceValues } from "./customdevicevalues";



// CustomDeviceToPost
/** 
 * Container Class for the Web API
**/
export class CustomDeviceToPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Serial" })
  serial?: number;

  @SpeakeasyMetadata({ data: "json, name=ValueDate" })
  valueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Values", elemType: CustomDeviceValues })
  values?: CustomDeviceValues[];
}
