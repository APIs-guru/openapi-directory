import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiPostsOppositionPostsQueryParams extends SpeakeasyBase {
    departmentId?: number;
}
export declare class GetApiPostsOppositionPostsRequest extends SpeakeasyBase {
    queryParams: GetApiPostsOppositionPostsQueryParams;
}
export declare class GetApiPostsOppositionPostsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    governmentOppositionPostItems?: shared.GovernmentOppositionPostItem[];
    statusCode: number;
}
