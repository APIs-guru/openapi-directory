import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserUserPermission
/** 
 * The users' permissions
**/
export class UserUserPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=Permission" })
  permission?: any[];
}


// UserUserRoles
/** 
 * The users' roles
**/
export class UserUserRoles extends SpeakeasyBase {
  @Metadata({ data: "json, name=Role" })
  role?: string[];
}


export class UserUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetaData" })
  metaData?: Map<string, any>;

  @Metadata({ data: "json, name=Permissions" })
  permissions?: UserUserPermission;

  @Metadata({ data: "json, name=Roles" })
  roles?: UserUserRoles;

  @Metadata({ data: "json, name=UserIdentifier" })
  userIdentifier?: string;
}


export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=User" })
  user?: UserUser;
}
