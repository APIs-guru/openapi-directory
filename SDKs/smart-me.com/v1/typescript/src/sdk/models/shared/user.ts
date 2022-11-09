import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { User } from "./user";


// User
/** 
 * Container Class for the Web API
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChildUsers", elemType: shared.User })
  childUsers?: User[];

  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=IdAsString" })
  idAsString?: string;

  @Metadata({ data: "json, name=IsAdmin" })
  isAdmin?: boolean;

  @Metadata({ data: "json, name=Permissions" })
  permissions?: string[];

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
