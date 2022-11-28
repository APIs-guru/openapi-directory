import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiPostsGovernmentPostsQueryParams extends SpeakeasyBase {
    departmentId?: number;
}
export declare class GetApiPostsGovernmentPostsRequest extends SpeakeasyBase {
    queryParams: GetApiPostsGovernmentPostsQueryParams;
}
export declare class GetApiPostsGovernmentPostsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    governmentOppositionPostItems?: shared.GovernmentOppositionPostItem[];
    statusCode: number;
}
