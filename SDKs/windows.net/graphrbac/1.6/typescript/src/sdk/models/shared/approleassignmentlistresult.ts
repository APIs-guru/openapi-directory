import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppRoleAssignmentListResult
/** 
 * AppRoleAssignment list operation result.
**/
export class AppRoleAssignmentListResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=odata.nextLink" })
  odataNextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
