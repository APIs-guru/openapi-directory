import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServicePrincipalCreateParameters
/** 
 * Request parameters for creating a new service principal.
**/
export class ServicePrincipalCreateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountEnabled" })
  accountEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId: string;

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
