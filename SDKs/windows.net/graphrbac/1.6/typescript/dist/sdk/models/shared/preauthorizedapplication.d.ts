import { SpeakeasyBase } from "../../../internal/utils";
import { PreAuthorizedApplicationExtension } from "./preauthorizedapplicationextension";
import { PreAuthorizedApplicationPermission } from "./preauthorizedapplicationpermission";
/**
 * Contains information about pre authorized client application.
**/
export declare class PreAuthorizedApplication extends SpeakeasyBase {
    appId?: string;
    extensions?: PreAuthorizedApplicationExtension[];
    permissions?: PreAuthorizedApplicationPermission[];
}
