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
// PackageSearchDto
/**
 * The PackageSearchDTO Class.
 * Contains relevant fields of PackageSearch DTO by masking actual Package entity's fields in application.
 *
**/
var PackageSearchDto = /** @class */ (function (_super) {
    __extends(PackageSearchDto, _super);
    function PackageSearchDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeStatus" }),
        __metadata("design:type", Boolean)
    ], PackageSearchDto.prototype, "activeStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addonFee" }),
        __metadata("design:type", Number)
    ], PackageSearchDto.prototype, "addonFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applyForAllGyms" }),
        __metadata("design:type", Boolean)
    ], PackageSearchDto.prototype, "applyForAllGyms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bindingPeriod" }),
        __metadata("design:type", Number)
    ], PackageSearchDto.prototype, "bindingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdDate" }),
        __metadata("design:type", Date)
    ], PackageSearchDto.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdUser" }),
        __metadata("design:type", String)
    ], PackageSearchDto.prototype, "createdUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PackageSearchDto.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=features" }),
        __metadata("design:type", String)
    ], PackageSearchDto.prototype, "features", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeMonths" }),
        __metadata("design:type", Number)
    ], PackageSearchDto.prototype, "freeMonths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memberCanRemoveAddOns" }),
        __metadata("design:type", Boolean)
    ], PackageSearchDto.prototype, "memberCanRemoveAddOns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiedDate" }),
        __metadata("design:type", Date)
    ], PackageSearchDto.prototype, "modifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiedUser" }),
        __metadata("design:type", String)
    ], PackageSearchDto.prototype, "modifiedUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monthlyFee" }),
        __metadata("design:type", Number)
    ], PackageSearchDto.prototype, "monthlyFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfVisits" }),
        __metadata("design:type", Number)
    ], PackageSearchDto.prototype, "numberOfVisits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageId" }),
        __metadata("design:type", Number)
    ], PackageSearchDto.prototype, "packageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], PackageSearchDto.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageNumber" }),
        __metadata("design:type", Number)
    ], PackageSearchDto.prototype, "packageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageType" }),
        __metadata("design:type", String)
    ], PackageSearchDto.prototype, "packageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registrationFee" }),
        __metadata("design:type", Number)
    ], PackageSearchDto.prototype, "registrationFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceFee" }),
        __metadata("design:type", Number)
    ], PackageSearchDto.prototype, "serviceFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", String)
    ], PackageSearchDto.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], PackageSearchDto.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPrice" }),
        __metadata("design:type", Number)
    ], PackageSearchDto.prototype, "totalPrice", void 0);
    return PackageSearchDto;
}(SpeakeasyBase));
export { PackageSearchDto };
