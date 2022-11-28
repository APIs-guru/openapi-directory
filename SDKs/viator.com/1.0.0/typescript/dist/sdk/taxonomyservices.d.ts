import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TaxonomyServices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * taxonomyAttractions - /taxonomy/attractions
     *
     * Get attractions
     * - Retrieves a list of attractions (things like the Eiffel Tower or Empire State Building) and their associated unique numeric identifiers
     * - The attraction's identifier (`seoId`) can be used as a means of searching for available products; for example, in the [/search/products](#operation/searchProducts) service.
     *
    **/
    taxonomyAttractions(req: operations.TaxonomyAttractionsRequest, config?: AxiosRequestConfig): Promise<operations.TaxonomyAttractionsResponse>;
    /**
     * taxonomyCategories - /taxonomy/categories
     *
     * Get all product categories
     * - Retrieves a list of product categories for a destination that can be used as a means of filtering when searching for products using the [/search/products](/#operation/searchProducts) service
     * - This service can be used to get a list of all categories and subcategories for a destination by including its `destId`, or you can omit the `destId` to get a list of all categories and subcategories
     * - **Note:** If no `destId` is passed, `productCount` and `thumbnailURL` will be `null` as they are destination-specific fields
     *
    **/
    taxonomyCategories(req: operations.TaxonomyCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.TaxonomyCategoriesResponse>;
    /**
     * taxonomyDestinations - /taxonomy/destinations
     *
     * Get details of all destinations supported by this API
     * - Retrieves all the country taxonomy/city nodes as a flat list
     * - Returns a complete list of Viator destinations, including destination names and parent identifiers
     * - Used to provide navigation through drill down lists or combo boxes
     *
    **/
    taxonomyDestinations(req: operations.TaxonomyDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.TaxonomyDestinationsResponse>;
}
