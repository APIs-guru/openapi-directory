import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserUserPermission
/** 
 * The users' permissions
**/
export class UserUserPermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Permission" })
  permission?: any[];
}


// UserUserRoles
/** 
 * The users' roles
**/
export class UserUserRoles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: string[];
}


export class UserUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetaData" })
  metaData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Permissions" })
  permissions?: UserUserPermission;

  @SpeakeasyMetadata({ data: "json, name=Roles" })
  roles?: UserUserRoles;

  @SpeakeasyMetadata({ data: "json, name=UserIdentifier" })
  userIdentifier?: string;
}


export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=User" })
  user?: UserUser;
}
