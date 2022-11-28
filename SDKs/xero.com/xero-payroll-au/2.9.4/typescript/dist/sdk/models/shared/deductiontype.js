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
export var DeductionTypeDeductionCategoryEnum;
(function (DeductionTypeDeductionCategoryEnum) {
    DeductionTypeDeductionCategoryEnum["None"] = "NONE";
    DeductionTypeDeductionCategoryEnum["Unionfees"] = "UNIONFEES";
    DeductionTypeDeductionCategoryEnum["Workplacegiving"] = "WORKPLACEGIVING";
})(DeductionTypeDeductionCategoryEnum || (DeductionTypeDeductionCategoryEnum = {}));
var DeductionTypeInput = /** @class */ (function (_super) {
    __extends(DeductionTypeInput, _super);
    function DeductionTypeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountCode" }),
        __metadata("design:type", String)
    ], DeductionTypeInput.prototype, "accountCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentRecord" }),
        __metadata("design:type", Boolean)
    ], DeductionTypeInput.prototype, "currentRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeductionCategory" }),
        __metadata("design:type", String)
    ], DeductionTypeInput.prototype, "deductionCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeductionTypeID" }),
        __metadata("design:type", String)
    ], DeductionTypeInput.prototype, "deductionTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsExemptFromW1" }),
        __metadata("design:type", Boolean)
    ], DeductionTypeInput.prototype, "isExemptFromW1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], DeductionTypeInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReducesSuper" }),
        __metadata("design:type", Boolean)
    ], DeductionTypeInput.prototype, "reducesSuper", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReducesTax" }),
        __metadata("design:type", Boolean)
    ], DeductionTypeInput.prototype, "reducesTax", void 0);
    return DeductionTypeInput;
}(SpeakeasyBase));
export { DeductionTypeInput };
var DeductionType = /** @class */ (function (_super) {
    __extends(DeductionType, _super);
    function DeductionType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountCode" }),
        __metadata("design:type", String)
    ], DeductionType.prototype, "accountCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentRecord" }),
        __metadata("design:type", Boolean)
    ], DeductionType.prototype, "currentRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeductionCategory" }),
        __metadata("design:type", String)
    ], DeductionType.prototype, "deductionCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeductionTypeID" }),
        __metadata("design:type", String)
    ], DeductionType.prototype, "deductionTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsExemptFromW1" }),
        __metadata("design:type", Boolean)
    ], DeductionType.prototype, "isExemptFromW1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], DeductionType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReducesSuper" }),
        __metadata("design:type", Boolean)
    ], DeductionType.prototype, "reducesSuper", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReducesTax" }),
        __metadata("design:type", Boolean)
    ], DeductionType.prototype, "reducesTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" }),
        __metadata("design:type", String)
    ], DeductionType.prototype, "updatedDateUtc", void 0);
    return DeductionType;
}(SpeakeasyBase));
export { DeductionType };
