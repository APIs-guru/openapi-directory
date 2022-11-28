import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersDeletePathParams extends SpeakeasyBase {
    tenantId: string;
    upnOrObjectId: string;
}
export declare class UsersDeleteQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class UsersDeleteRequest extends SpeakeasyBase {
    pathParams: UsersDeletePathParams;
    queryParams: UsersDeleteQueryParams;
}
export declare class UsersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
