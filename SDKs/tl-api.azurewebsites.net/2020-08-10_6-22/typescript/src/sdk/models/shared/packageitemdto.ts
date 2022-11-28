import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PackageItemDto
/** 
 * The PackageItemDTO Class.
 * Contains relevant fields of PackageItem DTO by masking actual Package entity's fields in application.
 *             
**/
export class PackageItemDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=articleId" })
  articleId: number;

  @SpeakeasyMetadata({ data: "json, name=articleName" })
  articleName?: string;

  @SpeakeasyMetadata({ data: "json, name=articleNumber" })
  articleNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=articlePrice" })
  articlePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=endOrder" })
  endOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=isIncludeServiceInCharge" })
  isIncludeServiceInCharge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=measureUnit" })
  measureUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=numberOfItems" })
  numberOfItems?: number;

  @SpeakeasyMetadata({ data: "json, name=startOrder" })
  startOrder?: number;
}
