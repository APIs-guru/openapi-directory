import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GymDto } from "./gymdto";
import { GymArticleDetailsDto } from "./gymarticledetailsdto";



// ArticleDto
/** 
 * The ArticleDTO Class.
 * Contains relevant fields of Article DTO by masking actual Article entity's fields in application.
 *             
**/
export class ArticleDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeStatus" })
  activeStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=applyForAllGyms" })
  applyForAllGyms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=articleId" })
  articleId?: number;

  @SpeakeasyMetadata({ data: "json, name=availableGyms", elemType: GymDto })
  availableGyms: GymDto[];

  @SpeakeasyMetadata({ data: "json, name=availableQty" })
  availableQty?: number;

  @SpeakeasyMetadata({ data: "json, name=barcode" })
  barcode?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdUser" })
  createdUser?: string;

  @SpeakeasyMetadata({ data: "json, name=cronExpression" })
  cronExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount?: number;

  @SpeakeasyMetadata({ data: "json, name=employeeDiscount" })
  employeeDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=employeePrice" })
  employeePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=gymArticles", elemType: GymArticleDetailsDto })
  gymArticles?: GymArticleDetailsDto[];

  @SpeakeasyMetadata({ data: "json, name=isAddOn" })
  isAddOn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isInventoryItem" })
  isInventoryItem?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isObsolete" })
  isObsolete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=measureUnit" })
  measureUnit: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=modifiedUser" })
  modifiedUser?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: number;

  @SpeakeasyMetadata({ data: "json, name=reorderLevel" })
  reorderLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=revenueAccountId" })
  revenueAccountId?: number;

  @SpeakeasyMetadata({ data: "json, name=sellingPrice" })
  sellingPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=vat" })
  vat?: number;

  @SpeakeasyMetadata({ data: "json, name=vatApplicable" })
  vatApplicable?: boolean;
}
