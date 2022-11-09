import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GymDto } from "./gymdto";
import { GymArticleDetailsDto } from "./gymarticledetailsdto";


// ArticleDto
/** 
 * The ArticleDTO Class.
 * Contains relevant fields of Article DTO by masking actual Article entity's fields in application.
 *             
**/
export class ArticleDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeStatus" })
  activeStatus?: boolean;

  @Metadata({ data: "json, name=applyForAllGyms" })
  applyForAllGyms?: boolean;

  @Metadata({ data: "json, name=articleId" })
  articleId?: number;

  @Metadata({ data: "json, name=availableGyms", elemType: shared.GymDto })
  availableGyms: GymDto[];

  @Metadata({ data: "json, name=availableQty" })
  availableQty?: number;

  @Metadata({ data: "json, name=barcode" })
  barcode?: string;

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=createdUser" })
  createdUser?: string;

  @Metadata({ data: "json, name=cronExpression" })
  cronExpression?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=discount" })
  discount?: number;

  @Metadata({ data: "json, name=employeeDiscount" })
  employeeDiscount?: number;

  @Metadata({ data: "json, name=employeePrice" })
  employeePrice?: number;

  @Metadata({ data: "json, name=gymArticles", elemType: shared.GymArticleDetailsDto })
  gymArticles?: GymArticleDetailsDto[];

  @Metadata({ data: "json, name=isAddOn" })
  isAddOn?: boolean;

  @Metadata({ data: "json, name=isInventoryItem" })
  isInventoryItem?: boolean;

  @Metadata({ data: "json, name=isObsolete" })
  isObsolete?: boolean;

  @Metadata({ data: "json, name=measureUnit" })
  measureUnit: string;

  @Metadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @Metadata({ data: "json, name=modifiedUser" })
  modifiedUser?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=number" })
  number?: number;

  @Metadata({ data: "json, name=price" })
  price: number;

  @Metadata({ data: "json, name=reorderLevel" })
  reorderLevel?: number;

  @Metadata({ data: "json, name=revenueAccountId" })
  revenueAccountId?: number;

  @Metadata({ data: "json, name=sellingPrice" })
  sellingPrice?: number;

  @Metadata({ data: "json, name=tags" })
  tags?: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=vat" })
  vat?: number;

  @Metadata({ data: "json, name=vatApplicable" })
  vatApplicable?: boolean;
}
