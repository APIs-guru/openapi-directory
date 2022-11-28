import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an OAuth 2.0 delegated permission scope. The specified OAuth 2.0 delegated permission scopes may be requested by client applications (through the requiredResourceAccess collection on the Application object) when calling a resource application. The oauth2Permissions property of the ServicePrincipal entity and of the Application entity is a collection of OAuth2Permission.
**/
export declare class OAuth2Permission extends SpeakeasyBase {
    adminConsentDescription?: string;
    adminConsentDisplayName?: string;
    id?: string;
    isEnabled?: boolean;
    type?: string;
    userConsentDescription?: string;
    userConsentDisplayName?: string;
    value?: string;
}
