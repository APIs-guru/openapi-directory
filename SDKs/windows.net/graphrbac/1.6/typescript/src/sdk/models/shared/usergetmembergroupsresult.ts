import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserGetMemberGroupsResult
/** 
 * Server response for GetMemberGroups API call.
**/
export class UserGetMemberGroupsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string[];
}
