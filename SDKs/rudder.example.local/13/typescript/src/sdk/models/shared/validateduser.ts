import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValidatedUser
/** 
 * list of users with their workflow settings
**/
export class ValidatedUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=isValidated" })
  isValidated: boolean;

  @Metadata({ data: "json, name=userExists" })
  userExists: boolean;

  @Metadata({ data: "json, name=username" })
  username: string;
}
