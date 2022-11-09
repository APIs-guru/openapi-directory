import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServicePrincipalUpdateParameters
/** 
 * Request parameters for update an existing service principal.
**/
export class ServicePrincipalUpdateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountEnabled" })
  accountEnabled?: boolean;

  @Metadata({ data: "json, name=appRoleAssignmentRequired" })
  appRoleAssignmentRequired?: boolean;

  @Metadata({ data: "json, name=keyCredentials" })
  keyCredentials?: Map<string, Map<string, any>>[];

  @Metadata({ data: "json, name=passwordCredentials" })
  passwordCredentials?: Map<string, Map<string, any>>[];

  @Metadata({ data: "json, name=servicePrincipalType" })
  servicePrincipalType?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
