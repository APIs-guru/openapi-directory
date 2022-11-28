import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommentsPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare enum GetCommentsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetCommentsQueryParams extends SpeakeasyBase {
    direction?: GetCommentsDirectionEnum;
    page?: number;
    perPage?: number;
}
export declare class GetCommentsRequest extends SpeakeasyBase {
    pathParams: GetCommentsPathParams;
    queryParams: GetCommentsQueryParams;
}
export declare class GetCommentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    comments?: shared.Comment[];
}
