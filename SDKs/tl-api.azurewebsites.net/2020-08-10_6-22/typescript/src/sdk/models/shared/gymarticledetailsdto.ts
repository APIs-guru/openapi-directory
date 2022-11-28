import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GymArticleDetailsDto
/** 
 * The GymArticleDetailsDTO Class.
 * Contains fields of GymArticleDetails DTO in application.
 *             
**/
export class GymArticleDetailsDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=articleId" })
  articleId?: number;

  @SpeakeasyMetadata({ data: "json, name=availableQty" })
  availableQty?: number;

  @SpeakeasyMetadata({ data: "json, name=createdUser" })
  createdUser?: string;

  @SpeakeasyMetadata({ data: "json, name=employeeDiscount" })
  employeeDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=employeePrice" })
  employeePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=gymId" })
  gymId?: number;

  @SpeakeasyMetadata({ data: "json, name=gymIdList" })
  gymIdList?: string;

  @SpeakeasyMetadata({ data: "json, name=gymName" })
  gymName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isInventoryItem" })
  isInventoryItem?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isObsolete" })
  isObsolete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modifiedUser" })
  modifiedUser?: string;

  @SpeakeasyMetadata({ data: "json, name=reorderLevel" })
  reorderLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=revenueAccountId" })
  revenueAccountId?: number;

  @SpeakeasyMetadata({ data: "json, name=sellingPrice" })
  sellingPrice?: number;
}
