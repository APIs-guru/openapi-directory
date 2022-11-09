import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InputInformation
/** 
 * Informations about the Inputs of a Meter or Folder
**/
export class InputInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Number" })
  number?: number;
}
