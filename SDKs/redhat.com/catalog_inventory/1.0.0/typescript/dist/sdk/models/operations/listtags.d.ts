import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListTagsQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListTagsRequest extends SpeakeasyBase {
    queryParams: ListTagsQueryParams;
}
export declare class ListTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tagsCollection?: shared.TagsCollection;
}
