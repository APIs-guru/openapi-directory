import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValidatedUser
/** 
 * list of users with their workflow settings
**/
export class ValidatedUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isValidated" })
  isValidated: boolean;

  @SpeakeasyMetadata({ data: "json, name=userExists" })
  userExists: boolean;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
