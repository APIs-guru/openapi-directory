import { SpeakeasyBase } from "../../../internal/utils";
import { GymDto } from "./gymdto";
import { GymArticleDetailsDto } from "./gymarticledetailsdto";
/**
 * The ArticleDTO Class.
 * Contains relevant fields of Article DTO by masking actual Article entity's fields in application.
 *
**/
export declare class ArticleDto extends SpeakeasyBase {
    activeStatus?: boolean;
    applyForAllGyms?: boolean;
    articleId?: number;
    availableGyms: GymDto[];
    availableQty?: number;
    barcode?: string;
    createdDate?: Date;
    createdUser?: string;
    cronExpression?: string;
    description?: string;
    discount?: number;
    employeeDiscount?: number;
    employeePrice?: number;
    gymArticles?: GymArticleDetailsDto[];
    isAddOn?: boolean;
    isInventoryItem?: boolean;
    isObsolete?: boolean;
    measureUnit: string;
    modifiedDate?: Date;
    modifiedUser?: string;
    name: string;
    number?: number;
    price: number;
    reorderLevel?: number;
    revenueAccountId?: number;
    sellingPrice?: number;
    tags?: string;
    type: string;
    vat?: number;
    vatApplicable?: boolean;
}
