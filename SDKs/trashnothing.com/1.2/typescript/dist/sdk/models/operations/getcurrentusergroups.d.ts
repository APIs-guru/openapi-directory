import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCurrentUserGroupsQueryParams extends SpeakeasyBase {
    membership?: string;
}
export declare class GetCurrentUserGroupsRequest extends SpeakeasyBase {
    queryParams: GetCurrentUserGroupsQueryParams;
}
export declare class GetCurrentUserGroupsResponse extends SpeakeasyBase {
    contentType: string;
    groups?: shared.Group[];
    statusCode: number;
}
