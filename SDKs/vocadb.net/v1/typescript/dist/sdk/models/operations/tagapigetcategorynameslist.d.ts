import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TagApiGetCategoryNamesListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare class TagApiGetCategoryNamesListQueryParams extends SpeakeasyBase {
    nameMatchMode?: TagApiGetCategoryNamesListNameMatchModeEnum;
    query?: string;
}
export declare class TagApiGetCategoryNamesListRequest extends SpeakeasyBase {
    queryParams: TagApiGetCategoryNamesListQueryParams;
}
export declare class TagApiGetCategoryNamesListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tagApiGetCategoryNamesList200ApplicationJsonStrings?: string[];
    tagApiGetCategoryNamesList200ApplicationJsonpStrings?: string[];
    tagApiGetCategoryNamesList200TextJsonStrings?: string[];
}
