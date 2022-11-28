import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserApiGetProfileCommentsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UserApiGetProfileCommentsQueryParams extends SpeakeasyBase {
    getTotalCount?: boolean;
    maxResults?: number;
    start?: number;
}
export declare class UserApiGetProfileCommentsRequest extends SpeakeasyBase {
    pathParams: UserApiGetProfileCommentsPathParams;
    queryParams: UserApiGetProfileCommentsQueryParams;
}
export declare class UserApiGetProfileCommentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultCommentForApiContract?: shared.PartialFindResultCommentForApiContract;
    statusCode: number;
}
