import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomDeviceValues } from "./customdevicevalues";


// CustomDeviceToPost
/** 
 * Container Class for the Web API
**/
export class CustomDeviceToPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Serial" })
  serial?: number;

  @Metadata({ data: "json, name=ValueDate" })
  valueDate?: Date;

  @Metadata({ data: "json, name=Values", elemType: shared.CustomDeviceValues })
  values?: CustomDeviceValues[];
}
