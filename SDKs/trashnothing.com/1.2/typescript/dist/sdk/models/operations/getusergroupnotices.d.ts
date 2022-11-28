import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserGroupNoticesQueryParams extends SpeakeasyBase {
    groupIds?: string;
}
export declare class GetUserGroupNoticesRequest extends SpeakeasyBase {
    queryParams: GetUserGroupNoticesQueryParams;
}
export declare class GetUserGroupNoticesResponse extends SpeakeasyBase {
    contentType: string;
    groupNotices?: shared.GroupNotice[];
    statusCode: number;
}
