import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PackageItemDto
/** 
 * The PackageItemDTO Class.
 * Contains relevant fields of PackageItem DTO by masking actual Package entity's fields in application.
 *             
**/
export class PackageItemDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=articleId" })
  articleId: number;

  @Metadata({ data: "json, name=articleName" })
  articleName?: string;

  @Metadata({ data: "json, name=articleNumber" })
  articleNumber?: number;

  @Metadata({ data: "json, name=articlePrice" })
  articlePrice?: number;

  @Metadata({ data: "json, name=endOrder" })
  endOrder?: number;

  @Metadata({ data: "json, name=isIncludeServiceInCharge" })
  isIncludeServiceInCharge?: boolean;

  @Metadata({ data: "json, name=measureUnit" })
  measureUnit?: string;

  @Metadata({ data: "json, name=numberOfItems" })
  numberOfItems?: number;

  @Metadata({ data: "json, name=startOrder" })
  startOrder?: number;
}
