import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GymArticleDetailsDto
/** 
 * The GymArticleDetailsDTO Class.
 * Contains fields of GymArticleDetails DTO in application.
 *             
**/
export class GymArticleDetailsDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=articleId" })
  articleId?: number;

  @Metadata({ data: "json, name=availableQty" })
  availableQty?: number;

  @Metadata({ data: "json, name=createdUser" })
  createdUser?: string;

  @Metadata({ data: "json, name=employeeDiscount" })
  employeeDiscount?: number;

  @Metadata({ data: "json, name=employeePrice" })
  employeePrice?: number;

  @Metadata({ data: "json, name=gymId" })
  gymId?: number;

  @Metadata({ data: "json, name=gymIdList" })
  gymIdList?: string;

  @Metadata({ data: "json, name=gymName" })
  gymName?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=isInventoryItem" })
  isInventoryItem?: boolean;

  @Metadata({ data: "json, name=isObsolete" })
  isObsolete?: boolean;

  @Metadata({ data: "json, name=modifiedUser" })
  modifiedUser?: string;

  @Metadata({ data: "json, name=reorderLevel" })
  reorderLevel?: number;

  @Metadata({ data: "json, name=revenueAccountId" })
  revenueAccountId?: number;

  @Metadata({ data: "json, name=sellingPrice" })
  sellingPrice?: number;
}
