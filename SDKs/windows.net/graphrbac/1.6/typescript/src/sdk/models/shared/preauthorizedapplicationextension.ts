import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PreAuthorizedApplicationExtension
/** 
 * Representation of an app PreAuthorizedApplicationExtension required by a pre authorized client app.
**/
export class PreAuthorizedApplicationExtension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditions" })
  conditions?: string[];
}
