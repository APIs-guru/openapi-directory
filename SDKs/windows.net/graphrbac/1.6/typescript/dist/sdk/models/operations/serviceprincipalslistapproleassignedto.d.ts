import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePrincipalsListAppRoleAssignedToPathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class ServicePrincipalsListAppRoleAssignedToQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ServicePrincipalsListAppRoleAssignedToRequest extends SpeakeasyBase {
    pathParams: ServicePrincipalsListAppRoleAssignedToPathParams;
    queryParams: ServicePrincipalsListAppRoleAssignedToQueryParams;
}
export declare class ServicePrincipalsListAppRoleAssignedToResponse extends SpeakeasyBase {
    appRoleAssignmentListResult?: shared.AppRoleAssignmentListResult;
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
