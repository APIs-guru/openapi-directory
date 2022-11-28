import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The PackageSearchDTO Class.
 * Contains relevant fields of PackageSearch DTO by masking actual Package entity's fields in application.
 *
**/
export declare class PackageSearchDto extends SpeakeasyBase {
    activeStatus?: boolean;
    addonFee?: number;
    applyForAllGyms?: boolean;
    bindingPeriod?: number;
    createdDate?: Date;
    createdUser?: string;
    description?: string;
    features?: string;
    freeMonths?: number;
    memberCanRemoveAddOns?: boolean;
    modifiedDate?: Date;
    modifiedUser?: string;
    monthlyFee?: number;
    numberOfVisits?: number;
    packageId?: number;
    packageName?: string;
    packageNumber?: number;
    packageType?: string;
    registrationFee?: number;
    serviceFee?: number;
    tags?: string;
    totalCount?: number;
    totalPrice?: number;
}
