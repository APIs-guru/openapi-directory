import { SpeakeasyBase } from "../../../internal/utils";
import { PackageItemDto } from "./packageitemdto";
import { GymDto } from "./gymdto";
/**
 * The PackageDTO Class.
 * Contains relevant fields of Package DTO by masking actual Package entity's fields in application.
 *
**/
export declare class PackageDto extends SpeakeasyBase {
    addOns?: PackageItemDto[];
    addonFee?: number;
    applyForAllGyms?: boolean;
    availableGyms?: GymDto[];
    bindingPeriod?: number;
    createdDate?: Date;
    createdUser?: string;
    description?: string;
    endDate?: Date;
    expireInMonths?: number;
    features?: string;
    freeMonths?: number;
    instructionsToGymUsers?: string;
    instructionsToWebUsers?: string;
    isActive?: boolean;
    isAtg?: boolean;
    isAutoRenew?: boolean;
    isFirstMonthFree?: boolean;
    isRegistrationFee?: boolean;
    isRestAmount?: boolean;
    isShownInMobile?: boolean;
    isSponsorPackage?: boolean;
    maximumGiveAwayRestAmount?: number;
    memberCanAddAddOns?: boolean;
    memberCanLeaveWithinFreePeriod?: boolean;
    memberCanRemoveAddOns?: boolean;
    modifiedDate?: Date;
    modifiedUser?: string;
    monthlyFee?: number;
    nextPackageNumber?: number;
    numberOfInstallments?: number;
    numberOfVisits?: number;
    packageId?: number;
    packageName: string;
    packageNumber?: string;
    packageType: string;
    perVisitPrice?: number;
    registrationFee: number;
    serviceFee: number;
    shownInWeb?: boolean;
    startDate?: Date;
    tags?: string;
    totalPrice?: number;
}
