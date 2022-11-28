import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListUsersQueryParams extends SpeakeasyBase {
    entityId?: string;
    page?: number;
    pageSize?: number;
    sort?: string;
    status?: shared.UserStatusEnum;
    type?: shared.UserTypeEnum;
}
export declare class ListUsersRequest extends SpeakeasyBase {
    queryParams: ListUsersQueryParams;
}
export declare class ListUsersResponse extends SpeakeasyBase {
    contentType: string;
    pagedUserResponse?: shared.PagedUserResponse;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
}
