import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersUpdatePathParams extends SpeakeasyBase {
    tenantId: string;
    upnOrObjectId: string;
}
export declare class UsersUpdateQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class UsersUpdateRequests extends SpeakeasyBase {
    userUpdateParameters?: Map<string, Map<string, any>>;
    userUpdateParameters1?: Map<string, Map<string, any>>;
}
export declare class UsersUpdateRequest extends SpeakeasyBase {
    pathParams: UsersUpdatePathParams;
    queryParams: UsersUpdateQueryParams;
    request: UsersUpdateRequests;
}
export declare class UsersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
