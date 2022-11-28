import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetTagsSynonymsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetTagsSynonymsSortEnum {
    Creation = "creation",
    Applied = "applied",
    Activity = "activity"
}
export declare class GetTagsSynonymsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    max?: string;
    min?: string;
    order?: GetTagsSynonymsOrderEnum;
    page?: number;
    pagesize?: number;
    site: string;
    sort?: GetTagsSynonymsSortEnum;
    todate?: number;
}
export declare class GetTagsSynonymsRequest extends SpeakeasyBase {
    queryParams: GetTagsSynonymsQueryParams;
}
export declare class GetTagsSynonymsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
