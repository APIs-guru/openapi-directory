import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicationsAddOwnerPathParams extends SpeakeasyBase {
    applicationObjectId: string;
    tenantId: string;
}
export declare class ApplicationsAddOwnerQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ApplicationsAddOwnerRequests extends SpeakeasyBase {
    addOwnerParameters?: Map<string, Map<string, any>>;
    addOwnerParameters1?: Map<string, Map<string, any>>;
}
export declare class ApplicationsAddOwnerRequest extends SpeakeasyBase {
    pathParams: ApplicationsAddOwnerPathParams;
    queryParams: ApplicationsAddOwnerQueryParams;
    request: ApplicationsAddOwnerRequests;
}
export declare class ApplicationsAddOwnerResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
