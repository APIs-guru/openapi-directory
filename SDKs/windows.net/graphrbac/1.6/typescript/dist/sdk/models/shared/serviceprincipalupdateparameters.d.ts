import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request parameters for update an existing service principal.
**/
export declare class ServicePrincipalUpdateParameters extends SpeakeasyBase {
    accountEnabled?: boolean;
    appRoleAssignmentRequired?: boolean;
    keyCredentials?: Map<string, Map<string, any>>[];
    passwordCredentials?: Map<string, Map<string, any>>[];
    servicePrincipalType?: string;
    tags?: string[];
}
