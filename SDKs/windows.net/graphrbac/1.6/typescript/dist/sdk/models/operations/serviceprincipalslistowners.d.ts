import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePrincipalsListOwnersPathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class ServicePrincipalsListOwnersQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ServicePrincipalsListOwnersRequest extends SpeakeasyBase {
    pathParams: ServicePrincipalsListOwnersPathParams;
    queryParams: ServicePrincipalsListOwnersQueryParams;
}
export declare class ServicePrincipalsListOwnersResponse extends SpeakeasyBase {
    contentType: string;
    directoryObjectListResult?: shared.DirectoryObjectListResult;
    graphError?: shared.GraphError;
    statusCode: number;
}
