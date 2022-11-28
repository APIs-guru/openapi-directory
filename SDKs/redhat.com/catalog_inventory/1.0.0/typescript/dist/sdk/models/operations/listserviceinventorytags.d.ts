import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListServiceInventoryTagsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ListServiceInventoryTagsQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListServiceInventoryTagsRequest extends SpeakeasyBase {
    pathParams: ListServiceInventoryTagsPathParams;
    queryParams: ListServiceInventoryTagsQueryParams;
}
export declare class ListServiceInventoryTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    statusCode: number;
    tagsCollection?: shared.TagsCollection;
}
