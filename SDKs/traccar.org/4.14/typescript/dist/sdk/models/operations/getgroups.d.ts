import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupsQueryParams extends SpeakeasyBase {
    all?: boolean;
    userId?: number;
}
export declare class GetGroupsRequest extends SpeakeasyBase {
    queryParams: GetGroupsQueryParams;
}
export declare class GetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    groups?: shared.Group[];
    statusCode: number;
}
