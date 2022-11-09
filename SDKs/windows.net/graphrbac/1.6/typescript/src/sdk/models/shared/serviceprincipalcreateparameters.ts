import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServicePrincipalCreateParameters
/** 
 * Request parameters for creating a new service principal.
**/
export class ServicePrincipalCreateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountEnabled" })
  accountEnabled?: boolean;

  @Metadata({ data: "json, name=appId" })
  appId: string;

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
