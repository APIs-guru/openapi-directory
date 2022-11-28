import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PackageSearchDto
/** 
 * The PackageSearchDTO Class.
 * Contains relevant fields of PackageSearch DTO by masking actual Package entity's fields in application.
 *                
**/
export class PackageSearchDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeStatus" })
  activeStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=addonFee" })
  addonFee?: number;

  @SpeakeasyMetadata({ data: "json, name=applyForAllGyms" })
  applyForAllGyms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bindingPeriod" })
  bindingPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdUser" })
  createdUser?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: string;

  @SpeakeasyMetadata({ data: "json, name=freeMonths" })
  freeMonths?: number;

  @SpeakeasyMetadata({ data: "json, name=memberCanRemoveAddOns" })
  memberCanRemoveAddOns?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=modifiedUser" })
  modifiedUser?: string;

  @SpeakeasyMetadata({ data: "json, name=monthlyFee" })
  monthlyFee?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfVisits" })
  numberOfVisits?: number;

  @SpeakeasyMetadata({ data: "json, name=packageId" })
  packageId?: number;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=packageNumber" })
  packageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=packageType" })
  packageType?: string;

  @SpeakeasyMetadata({ data: "json, name=registrationFee" })
  registrationFee?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceFee" })
  serviceFee?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPrice" })
  totalPrice?: number;
}
