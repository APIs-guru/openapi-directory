import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The GymArticleDetailsDTO Class.
 * Contains fields of GymArticleDetails DTO in application.
 *
**/
export declare class GymArticleDetailsDto extends SpeakeasyBase {
    articleId?: number;
    availableQty?: number;
    createdUser?: string;
    employeeDiscount?: number;
    employeePrice?: number;
    gymId?: number;
    gymIdList?: string;
    gymName?: string;
    id?: number;
    isDefault?: boolean;
    isInventoryItem?: boolean;
    isObsolete?: boolean;
    modifiedUser?: string;
    reorderLevel?: number;
    revenueAccountId?: number;
    sellingPrice?: number;
}
