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
// PayCodePayCodeNominalCode
/**
 * The pay codes' nominal code
**/
var PayCodePayCodeNominalCode = /** @class */ (function (_super) {
    __extends(PayCodePayCodeNominalCode, _super);
    function PayCodePayCodeNominalCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], PayCodePayCodeNominalCode.prototype, "atHref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], PayCodePayCodeNominalCode.prototype, "atRel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], PayCodePayCodeNominalCode.prototype, "atTitle", void 0);
    return PayCodePayCodeNominalCode;
}(SpeakeasyBase));
export { PayCodePayCodeNominalCode };
export var PayCodePayCodeRegionEnum;
(function (PayCodePayCodeRegionEnum) {
    PayCodePayCodeRegionEnum["NotSet"] = "NotSet";
    PayCodePayCodeRegionEnum["England"] = "England";
    PayCodePayCodeRegionEnum["Scotland"] = "Scotland";
    PayCodePayCodeRegionEnum["Wales"] = "Wales";
})(PayCodePayCodeRegionEnum || (PayCodePayCodeRegionEnum = {}));
export var PayCodePayCodeTerritoryEnum;
(function (PayCodePayCodeTerritoryEnum) {
    PayCodePayCodeTerritoryEnum["UnitedKingdom"] = "UnitedKingdom";
})(PayCodePayCodeTerritoryEnum || (PayCodePayCodeTerritoryEnum = {}));
export var PayCodePayCodeTypeEnum;
(function (PayCodePayCodeTypeEnum) {
    PayCodePayCodeTypeEnum["NotSet"] = "NotSet";
    PayCodePayCodeTypeEnum["Payment"] = "Payment";
    PayCodePayCodeTypeEnum["Deduction"] = "Deduction";
})(PayCodePayCodeTypeEnum || (PayCodePayCodeTypeEnum = {}));
var PayCodePayCode = /** @class */ (function (_super) {
    __extends(PayCodePayCode, _super);
    function PayCodePayCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Benefit" }),
        __metadata("design:type", Boolean)
    ], PayCodePayCode.prototype, "benefit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], PayCodePayCode.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], PayCodePayCode.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EffectiveDate" }),
        __metadata("design:type", Date)
    ], PayCodePayCode.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetaData" }),
        __metadata("design:type", Map)
    ], PayCodePayCode.prototype, "metaData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Niable" }),
        __metadata("design:type", Boolean)
    ], PayCodePayCode.prototype, "niable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NominalCode" }),
        __metadata("design:type", PayCodePayCodeNominalCode)
    ], PayCodePayCode.prototype, "nominalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NonArrestable" }),
        __metadata("design:type", Boolean)
    ], PayCodePayCode.prototype, "nonArrestable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notional" }),
        __metadata("design:type", Boolean)
    ], PayCodePayCode.prototype, "notional", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Readonly" }),
        __metadata("design:type", Boolean)
    ], PayCodePayCode.prototype, "readonly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Region" }),
        __metadata("design:type", String)
    ], PayCodePayCode.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Revision" }),
        __metadata("design:type", Number)
    ], PayCodePayCode.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Taxable" }),
        __metadata("design:type", Boolean)
    ], PayCodePayCode.prototype, "taxable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Territory" }),
        __metadata("design:type", String)
    ], PayCodePayCode.prototype, "territory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], PayCodePayCode.prototype, "type", void 0);
    return PayCodePayCode;
}(SpeakeasyBase));
export { PayCodePayCode };
var PayCode = /** @class */ (function (_super) {
    __extends(PayCode, _super);
    function PayCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayCode" }),
        __metadata("design:type", PayCodePayCode)
    ], PayCode.prototype, "payCode", void 0);
    return PayCode;
}(SpeakeasyBase));
export { PayCode };
