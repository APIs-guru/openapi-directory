import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PreAuthorizedApplicationPermission
/** 
 * Contains information about the pre-authorized permissions.
**/
export class PreAuthorizedApplicationPermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessGrants" })
  accessGrants?: string[];

  @SpeakeasyMetadata({ data: "json, name=directAccessGrant" })
  directAccessGrant?: boolean;
}
