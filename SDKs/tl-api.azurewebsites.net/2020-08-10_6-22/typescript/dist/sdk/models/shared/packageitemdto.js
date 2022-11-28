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
// PackageItemDto
/**
 * The PackageItemDTO Class.
 * Contains relevant fields of PackageItem DTO by masking actual Package entity's fields in application.
 *
**/
var PackageItemDto = /** @class */ (function (_super) {
    __extends(PackageItemDto, _super);
    function PackageItemDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=articleId" }),
        __metadata("design:type", Number)
    ], PackageItemDto.prototype, "articleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=articleName" }),
        __metadata("design:type", String)
    ], PackageItemDto.prototype, "articleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=articleNumber" }),
        __metadata("design:type", Number)
    ], PackageItemDto.prototype, "articleNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=articlePrice" }),
        __metadata("design:type", Number)
    ], PackageItemDto.prototype, "articlePrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endOrder" }),
        __metadata("design:type", Number)
    ], PackageItemDto.prototype, "endOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isIncludeServiceInCharge" }),
        __metadata("design:type", Boolean)
    ], PackageItemDto.prototype, "isIncludeServiceInCharge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=measureUnit" }),
        __metadata("design:type", String)
    ], PackageItemDto.prototype, "measureUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfItems" }),
        __metadata("design:type", Number)
    ], PackageItemDto.prototype, "numberOfItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startOrder" }),
        __metadata("design:type", Number)
    ], PackageItemDto.prototype, "startOrder", void 0);
    return PackageItemDto;
}(SpeakeasyBase));
export { PackageItemDto };
