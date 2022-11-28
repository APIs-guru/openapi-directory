import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersCreatePathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class UsersCreateQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class UsersCreateRequests extends SpeakeasyBase {
    userCreateParameters?: Map<string, Map<string, any>>;
    userCreateParameters1?: Map<string, Map<string, any>>;
}
export declare class UsersCreateRequest extends SpeakeasyBase {
    pathParams: UsersCreatePathParams;
    queryParams: UsersCreateQueryParams;
    request: UsersCreateRequests;
}
export declare class UsersCreateResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
    user?: Map<string, Map<string, any>>;
}
