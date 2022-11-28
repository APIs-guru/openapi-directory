import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The ArticleSearchDTO Class.
 * Contains relevant fields of ArticleSearch DTO by masking actual Article entity's fields in application.
 *
**/
export declare class ArticleSearchDto extends SpeakeasyBase {
    activeStatus?: boolean;
    applyForAllGyms?: boolean;
    articleId?: number;
    createdDate?: Date;
    createdUser?: string;
    description?: string;
    measureUnit?: string;
    modifiedDate?: Date;
    modifiedUser?: string;
    name?: string;
    number?: number;
    price?: number;
    sellingPrice?: number;
    tags?: string;
    totalCount?: number;
    type?: string;
}
