import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request parameters for creating a new service principal.
**/
export declare class ServicePrincipalCreateParameters extends SpeakeasyBase {
    accountEnabled?: boolean;
    appId: string;
    appRoleAssignmentRequired?: boolean;
    keyCredentials?: Map<string, Map<string, any>>[];
    passwordCredentials?: Map<string, Map<string, any>>[];
    servicePrincipalType?: string;
    tags?: string[];
}
