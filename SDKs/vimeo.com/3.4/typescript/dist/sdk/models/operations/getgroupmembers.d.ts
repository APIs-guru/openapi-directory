import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupMembersPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare enum GetGroupMembersDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetGroupMembersFilterEnum {
    Moderators = "moderators"
}
export declare enum GetGroupMembersSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetGroupMembersQueryParams extends SpeakeasyBase {
    direction?: GetGroupMembersDirectionEnum;
    filter?: GetGroupMembersFilterEnum;
    page?: number;
    perPage?: number;
    query?: string;
    sort?: GetGroupMembersSortEnum;
}
export declare class GetGroupMembersRequest extends SpeakeasyBase {
    pathParams: GetGroupMembersPathParams;
    queryParams: GetGroupMembersQueryParams;
}
export declare class GetGroupMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    users?: shared.User[];
}
