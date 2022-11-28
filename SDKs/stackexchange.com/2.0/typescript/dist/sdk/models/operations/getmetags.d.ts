import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMeTagsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetMeTagsSortEnum {
    Popular = "popular",
    Activity = "activity",
    Name = "name"
}
export declare class GetMeTagsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetMeTagsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetMeTagsSortEnum;
    todate?: number;
}
export declare class GetMeTagsRequest extends SpeakeasyBase {
    queryParams: GetMeTagsQueryParams;
}
export declare class GetMeTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
