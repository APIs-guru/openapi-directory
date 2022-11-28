import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetTagsRequest extends SpeakeasyBase {
    queryParams: GetTagsQueryParams;
}
export declare class GetTagsResponse extends SpeakeasyBase {
    contentType: string;
    listTagsResponse?: shared.ListTagsResponse;
    statusCode: number;
}
