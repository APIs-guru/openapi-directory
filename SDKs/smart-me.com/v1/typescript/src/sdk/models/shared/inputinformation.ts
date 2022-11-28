import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputInformation
/** 
 * Informations about the Inputs of a Meter or Folder
**/
export class InputInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: number;
}
