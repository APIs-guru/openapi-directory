import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// User
/** 
 * Container Class for the Web API
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChildUsers", elemType: User })
  childUsers?: User[];

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=IdAsString" })
  idAsString?: string;

  @SpeakeasyMetadata({ data: "json, name=IsAdmin" })
  isAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Permissions" })
  permissions?: string[];

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
