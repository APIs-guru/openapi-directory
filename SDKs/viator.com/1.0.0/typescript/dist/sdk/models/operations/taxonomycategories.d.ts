import { SpeakeasyBase } from "../../../internal/utils";
export declare class TaxonomyCategoriesQueryParams extends SpeakeasyBase {
    destId?: number;
}
export declare class TaxonomyCategoriesHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class TaxonomyCategories200ApplicationJsonDataSubcategories extends SpeakeasyBase {
    categoryId?: number;
    sortorder?: number;
    subCategoryUrlName?: string;
    subcategoryId?: number;
    subcategoryName?: string;
}
export declare class TaxonomyCategories200ApplicationJsonData extends SpeakeasyBase {
    groupName?: string;
    groupUrlName?: string;
    id?: number;
    productCount?: number;
    subcategories?: TaxonomyCategories200ApplicationJsonDataSubcategories[];
    thumbnailUrl?: string;
}
export declare class TaxonomyCategories200ApplicationJson extends SpeakeasyBase {
    data?: TaxonomyCategories200ApplicationJsonData[];
    dateStamp?: string;
    errorCodes?: string[];
    errorMessage?: any[];
    errorMessageText?: string;
    errorName?: string;
    errorReference?: string;
    errorType?: string;
    extraInfo?: Map<string, any>;
    extraObject?: Map<string, any>;
    success?: boolean;
    totalCount?: number;
    vmid?: string;
}
export declare class TaxonomyCategoriesRequest extends SpeakeasyBase {
    queryParams: TaxonomyCategoriesQueryParams;
    headers: TaxonomyCategoriesHeaders;
}
export declare class TaxonomyCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taxonomyCategories200ApplicationJsonObject?: TaxonomyCategories200ApplicationJson;
}
