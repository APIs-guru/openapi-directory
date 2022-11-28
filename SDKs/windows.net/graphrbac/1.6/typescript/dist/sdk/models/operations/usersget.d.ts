import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersGetPathParams extends SpeakeasyBase {
    tenantId: string;
    upnOrObjectId: string;
}
export declare class UsersGetQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class UsersGetRequest extends SpeakeasyBase {
    pathParams: UsersGetPathParams;
    queryParams: UsersGetQueryParams;
}
export declare class UsersGetResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
    user?: Map<string, Map<string, any>>;
}
