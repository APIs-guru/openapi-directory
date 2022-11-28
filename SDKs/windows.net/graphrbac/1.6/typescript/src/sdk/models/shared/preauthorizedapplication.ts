import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PreAuthorizedApplicationExtension } from "./preauthorizedapplicationextension";
import { PreAuthorizedApplicationPermission } from "./preauthorizedapplicationpermission";



// PreAuthorizedApplication
/** 
 * Contains information about pre authorized client application.
**/
export class PreAuthorizedApplication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=extensions", elemType: PreAuthorizedApplicationExtension })
  extensions?: PreAuthorizedApplicationExtension[];

  @SpeakeasyMetadata({ data: "json, name=permissions", elemType: PreAuthorizedApplicationPermission })
  permissions?: PreAuthorizedApplicationPermission[];
}
