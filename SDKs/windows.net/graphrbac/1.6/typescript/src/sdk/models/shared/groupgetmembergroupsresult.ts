import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupGetMemberGroupsResult
/** 
 * Server response for GetMemberGroups API call.
**/
export class GroupGetMemberGroupsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string[];
}
