import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OAuth2Permission
/** 
 * Represents an OAuth 2.0 delegated permission scope. The specified OAuth 2.0 delegated permission scopes may be requested by client applications (through the requiredResourceAccess collection on the Application object) when calling a resource application. The oauth2Permissions property of the ServicePrincipal entity and of the Application entity is a collection of OAuth2Permission.
**/
export class OAuth2Permission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminConsentDescription" })
  adminConsentDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=adminConsentDisplayName" })
  adminConsentDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=userConsentDescription" })
  userConsentDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=userConsentDisplayName" })
  userConsentDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
