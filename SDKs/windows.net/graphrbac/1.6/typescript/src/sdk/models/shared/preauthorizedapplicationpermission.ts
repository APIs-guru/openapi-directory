import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PreAuthorizedApplicationPermission
/** 
 * Contains information about the pre-authorized permissions.
**/
export class PreAuthorizedApplicationPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessGrants" })
  accessGrants?: string[];

  @Metadata({ data: "json, name=directAccessGrant" })
  directAccessGrant?: boolean;
}
