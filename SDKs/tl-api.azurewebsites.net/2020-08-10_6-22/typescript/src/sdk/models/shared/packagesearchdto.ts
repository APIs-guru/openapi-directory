import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PackageSearchDto
/** 
 * The PackageSearchDTO Class.
 * Contains relevant fields of PackageSearch DTO by masking actual Package entity's fields in application.
 *                
**/
export class PackageSearchDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeStatus" })
  activeStatus?: boolean;

  @Metadata({ data: "json, name=addonFee" })
  addonFee?: number;

  @Metadata({ data: "json, name=applyForAllGyms" })
  applyForAllGyms?: boolean;

  @Metadata({ data: "json, name=bindingPeriod" })
  bindingPeriod?: number;

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=createdUser" })
  createdUser?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=features" })
  features?: string;

  @Metadata({ data: "json, name=freeMonths" })
  freeMonths?: number;

  @Metadata({ data: "json, name=memberCanRemoveAddOns" })
  memberCanRemoveAddOns?: boolean;

  @Metadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @Metadata({ data: "json, name=modifiedUser" })
  modifiedUser?: string;

  @Metadata({ data: "json, name=monthlyFee" })
  monthlyFee?: number;

  @Metadata({ data: "json, name=numberOfVisits" })
  numberOfVisits?: number;

  @Metadata({ data: "json, name=packageId" })
  packageId?: number;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=packageNumber" })
  packageNumber?: number;

  @Metadata({ data: "json, name=packageType" })
  packageType?: string;

  @Metadata({ data: "json, name=registrationFee" })
  registrationFee?: number;

  @Metadata({ data: "json, name=serviceFee" })
  serviceFee?: number;

  @Metadata({ data: "json, name=tags" })
  tags?: string;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;

  @Metadata({ data: "json, name=totalPrice" })
  totalPrice?: number;
}
