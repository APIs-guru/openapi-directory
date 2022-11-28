import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SignedInUserListOwnedObjectsPathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class SignedInUserListOwnedObjectsQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class SignedInUserListOwnedObjectsRequest extends SpeakeasyBase {
    pathParams: SignedInUserListOwnedObjectsPathParams;
    queryParams: SignedInUserListOwnedObjectsQueryParams;
}
export declare class SignedInUserListOwnedObjectsResponse extends SpeakeasyBase {
    contentType: string;
    directoryObjectListResult?: shared.DirectoryObjectListResult;
    graphError?: shared.GraphError;
    statusCode: number;
}
