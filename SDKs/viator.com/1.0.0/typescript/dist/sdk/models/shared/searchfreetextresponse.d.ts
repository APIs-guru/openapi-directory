import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SearchFreetextResponseSearchTypeEnum {
    Product = "PRODUCT",
    Destination = "DESTINATION",
    Attraction = "ATTRACTION",
    Recommendation = "RECOMMENDATION"
}
export declare class SearchFreetextResponse extends SpeakeasyBase {
    searchType?: SearchFreetextResponseSearchTypeEnum;
    sortOrder?: number;
}
