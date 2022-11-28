var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PackageItemDto } from "./packageitemdto";
import { GymDto } from "./gymdto";
// PackageDto
/**
 * The PackageDTO Class.
 * Contains relevant fields of Package DTO by masking actual Package entity's fields in application.
 *
**/
var PackageDto = /** @class */ (function (_super) {
    __extends(PackageDto, _super);
    function PackageDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addOns", elemType: PackageItemDto }),
        __metadata("design:type", Array)
    ], PackageDto.prototype, "addOns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addonFee" }),
        __metadata("design:type", Number)
    ], PackageDto.prototype, "addonFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applyForAllGyms" }),
        __metadata("design:type", Boolean)
    ], PackageDto.prototype, "applyForAllGyms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableGyms", elemType: GymDto }),
        __metadata("design:type", Array)
    ], PackageDto.prototype, "availableGyms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bindingPeriod" }),
        __metadata("design:type", Number)
    ], PackageDto.prototype, "bindingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdDate" }),
        __metadata("design:type", Date)
    ], PackageDto.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdUser" }),
        __metadata("design:type", String)
    ], PackageDto.prototype, "createdUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PackageDto.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], PackageDto.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireInMonths" }),
        __metadata("design:type", Number)
    ], PackageDto.prototype, "expireInMonths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=features" }),
        __metadata("design:type", String)
    ], PackageDto.prototype, "features", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeMonths" }),
        __metadata("design:type", Number)
    ], PackageDto.prototype, "freeMonths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instructionsToGymUsers" }),
        __metadata("design:type", String)
    ], PackageDto.prototype, "instructionsToGymUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instructionsToWebUsers" }),
        __metadata("design:type", String)
    ], PackageDto.prototype, "instructionsToWebUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isActive" }),
        __metadata("design:type", Boolean)
    ], PackageDto.prototype, "isActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isAtg" }),
        __metadata("design:type", Boolean)
    ], PackageDto.prototype, "isAtg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isAutoRenew" }),
        __metadata("design:type", Boolean)
    ], PackageDto.prototype, "isAutoRenew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isFirstMonthFree" }),
        __metadata("design:type", Boolean)
    ], PackageDto.prototype, "isFirstMonthFree", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isRegistrationFee" }),
        __metadata("design:type", Boolean)
    ], PackageDto.prototype, "isRegistrationFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isRestAmount" }),
        __metadata("design:type", Boolean)
    ], PackageDto.prototype, "isRestAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isShownInMobile" }),
        __metadata("design:type", Boolean)
    ], PackageDto.prototype, "isShownInMobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSponsorPackage" }),
        __metadata("design:type", Boolean)
    ], PackageDto.prototype, "isSponsorPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumGiveAwayRestAmount" }),
        __metadata("design:type", Number)
    ], PackageDto.prototype, "maximumGiveAwayRestAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memberCanAddAddOns" }),
        __metadata("design:type", Boolean)
    ], PackageDto.prototype, "memberCanAddAddOns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memberCanLeaveWithinFreePeriod" }),
        __metadata("design:type", Boolean)
    ], PackageDto.prototype, "memberCanLeaveWithinFreePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memberCanRemoveAddOns" }),
        __metadata("design:type", Boolean)
    ], PackageDto.prototype, "memberCanRemoveAddOns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiedDate" }),
        __metadata("design:type", Date)
    ], PackageDto.prototype, "modifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiedUser" }),
        __metadata("design:type", String)
    ], PackageDto.prototype, "modifiedUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monthlyFee" }),
        __metadata("design:type", Number)
    ], PackageDto.prototype, "monthlyFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextPackageNumber" }),
        __metadata("design:type", Number)
    ], PackageDto.prototype, "nextPackageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfInstallments" }),
        __metadata("design:type", Number)
    ], PackageDto.prototype, "numberOfInstallments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfVisits" }),
        __metadata("design:type", Number)
    ], PackageDto.prototype, "numberOfVisits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageId" }),
        __metadata("design:type", Number)
    ], PackageDto.prototype, "packageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], PackageDto.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageNumber" }),
        __metadata("design:type", String)
    ], PackageDto.prototype, "packageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageType" }),
        __metadata("design:type", String)
    ], PackageDto.prototype, "packageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perVisitPrice" }),
        __metadata("design:type", Number)
    ], PackageDto.prototype, "perVisitPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registrationFee" }),
        __metadata("design:type", Number)
    ], PackageDto.prototype, "registrationFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceFee" }),
        __metadata("design:type", Number)
    ], PackageDto.prototype, "serviceFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shownInWeb" }),
        __metadata("design:type", Boolean)
    ], PackageDto.prototype, "shownInWeb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], PackageDto.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", String)
    ], PackageDto.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPrice" }),
        __metadata("design:type", Number)
    ], PackageDto.prototype, "totalPrice", void 0);
    return PackageDto;
}(SpeakeasyBase));
export { PackageDto };
