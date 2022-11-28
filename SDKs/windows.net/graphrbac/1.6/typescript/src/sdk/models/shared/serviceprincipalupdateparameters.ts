import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServicePrincipalUpdateParameters
/** 
 * Request parameters for update an existing service principal.
**/
export class ServicePrincipalUpdateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountEnabled" })
  accountEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=appRoleAssignmentRequired" })
  appRoleAssignmentRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keyCredentials" })
  keyCredentials?: Map<string, Map<string, any>>[];

  @SpeakeasyMetadata({ data: "json, name=passwordCredentials" })
  passwordCredentials?: Map<string, Map<string, any>>[];

  @SpeakeasyMetadata({ data: "json, name=servicePrincipalType" })
  servicePrincipalType?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
