import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagsListQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class TagsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Tag[];
}
export declare class TagsListRequest extends SpeakeasyBase {
    queryParams: TagsListQueryParams;
}
export declare class TagsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tagsList200ApplicationJsonObject?: TagsList200ApplicationJson;
}
