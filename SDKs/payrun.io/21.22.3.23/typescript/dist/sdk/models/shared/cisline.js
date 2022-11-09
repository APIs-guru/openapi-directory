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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var CisLineCisLinePayFrequencyEnum;
(function (CisLineCisLinePayFrequencyEnum) {
    CisLineCisLinePayFrequencyEnum["Monthly"] = "Monthly";
    CisLineCisLinePayFrequencyEnum["Weekly"] = "Weekly";
})(CisLineCisLinePayFrequencyEnum || (CisLineCisLinePayFrequencyEnum = {}));
export var CisLineCisLineTaxTreatmentEnum;
(function (CisLineCisLineTaxTreatmentEnum) {
    CisLineCisLineTaxTreatmentEnum["Taxable"] = "Taxable";
    CisLineCisLineTaxTreatmentEnum["NonTaxable"] = "NonTaxable";
    CisLineCisLineTaxTreatmentEnum["Notional"] = "Notional";
    CisLineCisLineTaxTreatmentEnum["Materials"] = "Materials";
})(CisLineCisLineTaxTreatmentEnum || (CisLineCisLineTaxTreatmentEnum = {}));
export var CisLineCisLineUomEnum;
(function (CisLineCisLineUomEnum) {
    CisLineCisLineUomEnum["NotSet"] = "NotSet";
    CisLineCisLineUomEnum["Minute"] = "Minute";
    CisLineCisLineUomEnum["Hour"] = "Hour";
    CisLineCisLineUomEnum["Day"] = "Day";
    CisLineCisLineUomEnum["Week"] = "Week";
    CisLineCisLineUomEnum["Month"] = "Month";
    CisLineCisLineUomEnum["Year"] = "Year";
    CisLineCisLineUomEnum["Unit"] = "Unit";
})(CisLineCisLineUomEnum || (CisLineCisLineUomEnum = {}));
var CisLineCisLine = /** @class */ (function (_super) {
    __extends(CisLineCisLine, _super);
    function CisLineCisLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CisDeduction" }),
        __metadata("design:type", Number)
    ], CisLineCisLine.prototype, "cisDeduction", void 0);
    __decorate([
        Metadata({ data: "json, name=CisLineType" }),
        __metadata("design:type", String)
    ], CisLineCisLine.prototype, "cisLineType", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CisLineCisLine.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=Generated" }),
        __metadata("design:type", Date)
    ], CisLineCisLine.prototype, "generated", void 0);
    __decorate([
        Metadata({ data: "json, name=GrossPay" }),
        __metadata("design:type", Number)
    ], CisLineCisLine.prototype, "grossPay", void 0);
    __decorate([
        Metadata({ data: "json, name=NominalCodeKey" }),
        __metadata("design:type", String)
    ], CisLineCisLine.prototype, "nominalCodeKey", void 0);
    __decorate([
        Metadata({ data: "json, name=PayFrequency" }),
        __metadata("design:type", String)
    ], CisLineCisLine.prototype, "payFrequency", void 0);
    __decorate([
        Metadata({ data: "json, name=TaxMonth" }),
        __metadata("design:type", Number)
    ], CisLineCisLine.prototype, "taxMonth", void 0);
    __decorate([
        Metadata({ data: "json, name=TaxPeriod" }),
        __metadata("design:type", Number)
    ], CisLineCisLine.prototype, "taxPeriod", void 0);
    __decorate([
        Metadata({ data: "json, name=TaxTreatment" }),
        __metadata("design:type", String)
    ], CisLineCisLine.prototype, "taxTreatment", void 0);
    __decorate([
        Metadata({ data: "json, name=TaxYear" }),
        __metadata("design:type", Number)
    ], CisLineCisLine.prototype, "taxYear", void 0);
    __decorate([
        Metadata({ data: "json, name=UOM" }),
        __metadata("design:type", String)
    ], CisLineCisLine.prototype, "uom", void 0);
    __decorate([
        Metadata({ data: "json, name=UnitRate" }),
        __metadata("design:type", Number)
    ], CisLineCisLine.prototype, "unitRate", void 0);
    __decorate([
        Metadata({ data: "json, name=Units" }),
        __metadata("design:type", Number)
    ], CisLineCisLine.prototype, "units", void 0);
    __decorate([
        Metadata({ data: "json, name=VAT" }),
        __metadata("design:type", Number)
    ], CisLineCisLine.prototype, "vat", void 0);
    return CisLineCisLine;
}(SpeakeasyBase));
export { CisLineCisLine };
var CisLine = /** @class */ (function (_super) {
    __extends(CisLine, _super);
    function CisLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CisLine" }),
        __metadata("design:type", CisLineCisLine)
    ], CisLine.prototype, "cisLine", void 0);
    return CisLine;
}(SpeakeasyBase));
export { CisLine };
