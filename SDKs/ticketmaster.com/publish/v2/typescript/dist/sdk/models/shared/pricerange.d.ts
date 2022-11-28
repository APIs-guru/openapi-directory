import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PriceRangeTypeEnum {
    Standard = "standard"
}
/**
 * PriceRange
**/
export declare class PriceRange extends SpeakeasyBase {
    currency?: string;
    max?: number;
    min?: number;
    type?: PriceRangeTypeEnum;
}
