import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupGetMemberGroupsResult
/** 
 * Server response for GetMemberGroups API call.
**/
export class GroupGetMemberGroupsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string[];
}
