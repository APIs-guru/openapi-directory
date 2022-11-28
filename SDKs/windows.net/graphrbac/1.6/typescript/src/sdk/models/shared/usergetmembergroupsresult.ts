import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserGetMemberGroupsResult
/** 
 * Server response for GetMemberGroups API call.
**/
export class UserGetMemberGroupsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string[];
}
