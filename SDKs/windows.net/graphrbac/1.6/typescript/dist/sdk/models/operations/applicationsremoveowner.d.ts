import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicationsRemoveOwnerPathParams extends SpeakeasyBase {
    applicationObjectId: string;
    ownerObjectId: string;
    tenantId: string;
}
export declare class ApplicationsRemoveOwnerQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ApplicationsRemoveOwnerRequest extends SpeakeasyBase {
    pathParams: ApplicationsRemoveOwnerPathParams;
    queryParams: ApplicationsRemoveOwnerQueryParams;
}
export declare class ApplicationsRemoveOwnerResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
