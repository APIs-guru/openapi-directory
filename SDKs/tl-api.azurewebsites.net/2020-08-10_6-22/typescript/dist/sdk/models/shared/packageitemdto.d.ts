import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The PackageItemDTO Class.
 * Contains relevant fields of PackageItem DTO by masking actual Package entity's fields in application.
 *
**/
export declare class PackageItemDto extends SpeakeasyBase {
    articleId: number;
    articleName?: string;
    articleNumber?: number;
    articlePrice?: number;
    endOrder?: number;
    isIncludeServiceInCharge?: boolean;
    measureUnit?: string;
    numberOfItems?: number;
    startOrder?: number;
}
