import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PreAuthorizedApplicationExtension
/** 
 * Representation of an app PreAuthorizedApplicationExtension required by a pre authorized client app.
**/
export class PreAuthorizedApplicationExtension extends SpeakeasyBase {
  @Metadata({ data: "json, name=conditions" })
  conditions?: string[];
}
