import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OAuth2Permission
/** 
 * Represents an OAuth 2.0 delegated permission scope. The specified OAuth 2.0 delegated permission scopes may be requested by client applications (through the requiredResourceAccess collection on the Application object) when calling a resource application. The oauth2Permissions property of the ServicePrincipal entity and of the Application entity is a collection of OAuth2Permission.
**/
export class OAuth2Permission extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminConsentDescription" })
  adminConsentDescription?: string;

  @Metadata({ data: "json, name=adminConsentDisplayName" })
  adminConsentDisplayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=userConsentDescription" })
  userConsentDescription?: string;

  @Metadata({ data: "json, name=userConsentDisplayName" })
  userConsentDisplayName?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
