import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSearchAdvancedAcceptedEnum {
    True = "true",
    False = "false"
}
export declare enum GetSearchAdvancedClosedEnum {
    True = "true",
    False = "false"
}
export declare enum GetSearchAdvancedMigratedEnum {
    True = "true",
    False = "false"
}
export declare enum GetSearchAdvancedNoticeEnum {
    True = "true",
    False = "false"
}
export declare enum GetSearchAdvancedOrderEnum {
    Desc = "desc",
    Asc = "asc"
}
export declare enum GetSearchAdvancedSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes",
    Relevance = "relevance"
}
export declare enum GetSearchAdvancedWikiEnum {
    True = "true",
    False = "false"
}
export declare class GetSearchAdvancedQueryParams extends SpeakeasyBase {
    accepted?: GetSearchAdvancedAcceptedEnum;
    answers?: number;
    body?: string;
    callback?: string;
    closed?: GetSearchAdvancedClosedEnum;
    filter?: string;
    fromdate?: number;
    max?: string;
    migrated?: GetSearchAdvancedMigratedEnum;
    min?: string;
    notice?: GetSearchAdvancedNoticeEnum;
    nottagged?: string;
    order?: GetSearchAdvancedOrderEnum;
    page?: number;
    pagesize?: number;
    q?: string;
    site: string;
    sort?: GetSearchAdvancedSortEnum;
    tagged?: string;
    title?: string;
    todate?: number;
    url?: string;
    user?: number;
    views?: number;
    wiki?: GetSearchAdvancedWikiEnum;
}
export declare class GetSearchAdvancedRequest extends SpeakeasyBase {
    queryParams: GetSearchAdvancedQueryParams;
}
export declare class GetSearchAdvancedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
