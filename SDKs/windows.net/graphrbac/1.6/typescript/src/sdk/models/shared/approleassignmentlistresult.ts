import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AppRoleAssignmentListResult
/** 
 * AppRoleAssignment list operation result.
**/
export class AppRoleAssignmentListResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=odata.nextLink" })
  odataNextLink?: string;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
