import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PackageItemDto } from "./packageitemdto";
import { GymDto } from "./gymdto";



// PackageDto
/** 
 * The PackageDTO Class.
 * Contains relevant fields of Package DTO by masking actual Package entity's fields in application.
 *             
**/
export class PackageDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addOns", elemType: PackageItemDto })
  addOns?: PackageItemDto[];

  @SpeakeasyMetadata({ data: "json, name=addonFee" })
  addonFee?: number;

  @SpeakeasyMetadata({ data: "json, name=applyForAllGyms" })
  applyForAllGyms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=availableGyms", elemType: GymDto })
  availableGyms?: GymDto[];

  @SpeakeasyMetadata({ data: "json, name=bindingPeriod" })
  bindingPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdUser" })
  createdUser?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=expireInMonths" })
  expireInMonths?: number;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: string;

  @SpeakeasyMetadata({ data: "json, name=freeMonths" })
  freeMonths?: number;

  @SpeakeasyMetadata({ data: "json, name=instructionsToGymUsers" })
  instructionsToGymUsers?: string;

  @SpeakeasyMetadata({ data: "json, name=instructionsToWebUsers" })
  instructionsToWebUsers?: string;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isAtg" })
  isAtg?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isAutoRenew" })
  isAutoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isFirstMonthFree" })
  isFirstMonthFree?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isRegistrationFee" })
  isRegistrationFee?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isRestAmount" })
  isRestAmount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isShownInMobile" })
  isShownInMobile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSponsorPackage" })
  isSponsorPackage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maximumGiveAwayRestAmount" })
  maximumGiveAwayRestAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=memberCanAddAddOns" })
  memberCanAddAddOns?: boolean;

  @SpeakeasyMetadata({ data: "json, name=memberCanLeaveWithinFreePeriod" })
  memberCanLeaveWithinFreePeriod?: boolean;

  @SpeakeasyMetadata({ data: "json, name=memberCanRemoveAddOns" })
  memberCanRemoveAddOns?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=modifiedUser" })
  modifiedUser?: string;

  @SpeakeasyMetadata({ data: "json, name=monthlyFee" })
  monthlyFee?: number;

  @SpeakeasyMetadata({ data: "json, name=nextPackageNumber" })
  nextPackageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfInstallments" })
  numberOfInstallments?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfVisits" })
  numberOfVisits?: number;

  @SpeakeasyMetadata({ data: "json, name=packageId" })
  packageId?: number;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName: string;

  @SpeakeasyMetadata({ data: "json, name=packageNumber" })
  packageNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=packageType" })
  packageType: string;

  @SpeakeasyMetadata({ data: "json, name=perVisitPrice" })
  perVisitPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=registrationFee" })
  registrationFee: number;

  @SpeakeasyMetadata({ data: "json, name=serviceFee" })
  serviceFee: number;

  @SpeakeasyMetadata({ data: "json, name=shownInWeb" })
  shownInWeb?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string;

  @SpeakeasyMetadata({ data: "json, name=totalPrice" })
  totalPrice?: number;
}
