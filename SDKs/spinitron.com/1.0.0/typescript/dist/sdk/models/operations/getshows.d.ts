import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShowsQueryParams extends SpeakeasyBase {
    count?: number;
    end?: Date;
    expand?: string[];
    fields?: string[];
    page?: number;
    start?: Date;
}
export declare class GetShows200ApplicationJsonLinks extends SpeakeasyBase {
    self?: shared.Link;
}
export declare class GetShows200ApplicationJson extends SpeakeasyBase {
    links?: GetShows200ApplicationJsonLinks;
    meta?: shared.Pagination;
    items?: shared.Show[];
}
export declare class GetShowsRequest extends SpeakeasyBase {
    queryParams: GetShowsQueryParams;
}
export declare class GetShowsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.Error;
    getShows200ApplicationJsonObject?: GetShows200ApplicationJson;
    statusCode: number;
}
