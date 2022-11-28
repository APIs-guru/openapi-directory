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
// CisLineTypeCisLineTypeNominalCode
/**
 * The cis line types' nominal code
**/
var CisLineTypeCisLineTypeNominalCode = /** @class */ (function (_super) {
    __extends(CisLineTypeCisLineTypeNominalCode, _super);
    function CisLineTypeCisLineTypeNominalCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], CisLineTypeCisLineTypeNominalCode.prototype, "atHref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], CisLineTypeCisLineTypeNominalCode.prototype, "atRel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], CisLineTypeCisLineTypeNominalCode.prototype, "atTitle", void 0);
    return CisLineTypeCisLineTypeNominalCode;
}(SpeakeasyBase));
export { CisLineTypeCisLineTypeNominalCode };
export var CisLineTypeCisLineTypeTaxTreatmentEnum;
(function (CisLineTypeCisLineTypeTaxTreatmentEnum) {
    CisLineTypeCisLineTypeTaxTreatmentEnum["Taxable"] = "Taxable";
    CisLineTypeCisLineTypeTaxTreatmentEnum["NonTaxable"] = "NonTaxable";
    CisLineTypeCisLineTypeTaxTreatmentEnum["Notional"] = "Notional";
    CisLineTypeCisLineTypeTaxTreatmentEnum["Materials"] = "Materials";
})(CisLineTypeCisLineTypeTaxTreatmentEnum || (CisLineTypeCisLineTypeTaxTreatmentEnum = {}));
var CisLineTypeCisLineType = /** @class */ (function (_super) {
    __extends(CisLineTypeCisLineType, _super);
    function CisLineTypeCisLineType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CisLineTypeCisLineType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LineType" }),
        __metadata("design:type", String)
    ], CisLineTypeCisLineType.prototype, "lineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NominalCode" }),
        __metadata("design:type", CisLineTypeCisLineTypeNominalCode)
    ], CisLineTypeCisLineType.prototype, "nominalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxTreatment" }),
        __metadata("design:type", String)
    ], CisLineTypeCisLineType.prototype, "taxTreatment", void 0);
    return CisLineTypeCisLineType;
}(SpeakeasyBase));
export { CisLineTypeCisLineType };
var CisLineType = /** @class */ (function (_super) {
    __extends(CisLineType, _super);
    function CisLineType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CisLineType" }),
        __metadata("design:type", CisLineTypeCisLineType)
    ], CisLineType.prototype, "cisLineType", void 0);
    return CisLineType;
}(SpeakeasyBase));
export { CisLineType };
