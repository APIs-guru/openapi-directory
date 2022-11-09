import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PreAuthorizedApplicationExtension } from "./preauthorizedapplicationextension";
import { PreAuthorizedApplicationPermission } from "./preauthorizedapplicationpermission";


// PreAuthorizedApplication
/** 
 * Contains information about pre authorized client application.
**/
export class PreAuthorizedApplication extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=extensions", elemType: shared.PreAuthorizedApplicationExtension })
  extensions?: PreAuthorizedApplicationExtension[];

  @Metadata({ data: "json, name=permissions", elemType: shared.PreAuthorizedApplicationPermission })
  permissions?: PreAuthorizedApplicationPermission[];
}
