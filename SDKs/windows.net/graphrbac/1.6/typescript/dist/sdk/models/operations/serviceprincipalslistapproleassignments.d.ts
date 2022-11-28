import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePrincipalsListAppRoleAssignmentsPathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class ServicePrincipalsListAppRoleAssignmentsQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ServicePrincipalsListAppRoleAssignmentsRequest extends SpeakeasyBase {
    pathParams: ServicePrincipalsListAppRoleAssignmentsPathParams;
    queryParams: ServicePrincipalsListAppRoleAssignmentsQueryParams;
}
export declare class ServicePrincipalsListAppRoleAssignmentsResponse extends SpeakeasyBase {
    appRoleAssignmentListResult?: shared.AppRoleAssignmentListResult;
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
