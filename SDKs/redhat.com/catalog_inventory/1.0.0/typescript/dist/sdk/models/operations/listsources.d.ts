import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListSourcesQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListSourcesRequest extends SpeakeasyBase {
    queryParams: ListSourcesQueryParams;
}
export declare class ListSourcesResponse extends SpeakeasyBase {
    contentType: string;
    sourcesCollection?: shared.SourcesCollection;
    statusCode: number;
}
