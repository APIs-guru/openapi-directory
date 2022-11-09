import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PackageItemDto } from "./packageitemdto";
import { GymDto } from "./gymdto";


// PackageDto
/** 
 * The PackageDTO Class.
 * Contains relevant fields of Package DTO by masking actual Package entity's fields in application.
 *             
**/
export class PackageDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=addOns", elemType: shared.PackageItemDto })
  addOns?: PackageItemDto[];

  @Metadata({ data: "json, name=addonFee" })
  addonFee?: number;

  @Metadata({ data: "json, name=applyForAllGyms" })
  applyForAllGyms?: boolean;

  @Metadata({ data: "json, name=availableGyms", elemType: shared.GymDto })
  availableGyms?: GymDto[];

  @Metadata({ data: "json, name=bindingPeriod" })
  bindingPeriod?: number;

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=createdUser" })
  createdUser?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=expireInMonths" })
  expireInMonths?: number;

  @Metadata({ data: "json, name=features" })
  features?: string;

  @Metadata({ data: "json, name=freeMonths" })
  freeMonths?: number;

  @Metadata({ data: "json, name=instructionsToGymUsers" })
  instructionsToGymUsers?: string;

  @Metadata({ data: "json, name=instructionsToWebUsers" })
  instructionsToWebUsers?: string;

  @Metadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=isAtg" })
  isAtg?: boolean;

  @Metadata({ data: "json, name=isAutoRenew" })
  isAutoRenew?: boolean;

  @Metadata({ data: "json, name=isFirstMonthFree" })
  isFirstMonthFree?: boolean;

  @Metadata({ data: "json, name=isRegistrationFee" })
  isRegistrationFee?: boolean;

  @Metadata({ data: "json, name=isRestAmount" })
  isRestAmount?: boolean;

  @Metadata({ data: "json, name=isShownInMobile" })
  isShownInMobile?: boolean;

  @Metadata({ data: "json, name=isSponsorPackage" })
  isSponsorPackage?: boolean;

  @Metadata({ data: "json, name=maximumGiveAwayRestAmount" })
  maximumGiveAwayRestAmount?: number;

  @Metadata({ data: "json, name=memberCanAddAddOns" })
  memberCanAddAddOns?: boolean;

  @Metadata({ data: "json, name=memberCanLeaveWithinFreePeriod" })
  memberCanLeaveWithinFreePeriod?: boolean;

  @Metadata({ data: "json, name=memberCanRemoveAddOns" })
  memberCanRemoveAddOns?: boolean;

  @Metadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @Metadata({ data: "json, name=modifiedUser" })
  modifiedUser?: string;

  @Metadata({ data: "json, name=monthlyFee" })
  monthlyFee?: number;

  @Metadata({ data: "json, name=nextPackageNumber" })
  nextPackageNumber?: number;

  @Metadata({ data: "json, name=numberOfInstallments" })
  numberOfInstallments?: number;

  @Metadata({ data: "json, name=numberOfVisits" })
  numberOfVisits?: number;

  @Metadata({ data: "json, name=packageId" })
  packageId?: number;

  @Metadata({ data: "json, name=packageName" })
  packageName: string;

  @Metadata({ data: "json, name=packageNumber" })
  packageNumber?: string;

  @Metadata({ data: "json, name=packageType" })
  packageType: string;

  @Metadata({ data: "json, name=perVisitPrice" })
  perVisitPrice?: number;

  @Metadata({ data: "json, name=registrationFee" })
  registrationFee: number;

  @Metadata({ data: "json, name=serviceFee" })
  serviceFee: number;

  @Metadata({ data: "json, name=shownInWeb" })
  shownInWeb?: boolean;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=tags" })
  tags?: string;

  @Metadata({ data: "json, name=totalPrice" })
  totalPrice?: number;
}
