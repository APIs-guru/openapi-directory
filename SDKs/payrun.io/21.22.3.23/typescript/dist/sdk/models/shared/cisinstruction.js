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
export var CisInstructionCisInstructionPayFrequencyEnum;
(function (CisInstructionCisInstructionPayFrequencyEnum) {
    CisInstructionCisInstructionPayFrequencyEnum["Monthly"] = "Monthly";
    CisInstructionCisInstructionPayFrequencyEnum["Weekly"] = "Weekly";
})(CisInstructionCisInstructionPayFrequencyEnum || (CisInstructionCisInstructionPayFrequencyEnum = {}));
export var CisInstructionCisInstructionUomEnum;
(function (CisInstructionCisInstructionUomEnum) {
    CisInstructionCisInstructionUomEnum["NotSet"] = "NotSet";
    CisInstructionCisInstructionUomEnum["Minute"] = "Minute";
    CisInstructionCisInstructionUomEnum["Hour"] = "Hour";
    CisInstructionCisInstructionUomEnum["Day"] = "Day";
    CisInstructionCisInstructionUomEnum["Week"] = "Week";
    CisInstructionCisInstructionUomEnum["Month"] = "Month";
    CisInstructionCisInstructionUomEnum["Year"] = "Year";
    CisInstructionCisInstructionUomEnum["Unit"] = "Unit";
})(CisInstructionCisInstructionUomEnum || (CisInstructionCisInstructionUomEnum = {}));
var CisInstructionCisInstruction = /** @class */ (function (_super) {
    __extends(CisInstructionCisInstruction, _super);
    function CisInstructionCisInstruction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CisLineTag" }),
        __metadata("design:type", String)
    ], CisInstructionCisInstruction.prototype, "cisLineTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CisLineType" }),
        __metadata("design:type", String)
    ], CisInstructionCisInstruction.prototype, "cisLineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CisInstructionCisInstruction.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayFrequency" }),
        __metadata("design:type", String)
    ], CisInstructionCisInstruction.prototype, "payFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PeriodEnd" }),
        __metadata("design:type", Number)
    ], CisInstructionCisInstruction.prototype, "periodEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PeriodStart" }),
        __metadata("design:type", Number)
    ], CisInstructionCisInstruction.prototype, "periodStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxYearEnd" }),
        __metadata("design:type", Number)
    ], CisInstructionCisInstruction.prototype, "taxYearEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxYearStart" }),
        __metadata("design:type", Number)
    ], CisInstructionCisInstruction.prototype, "taxYearStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UOM" }),
        __metadata("design:type", String)
    ], CisInstructionCisInstruction.prototype, "uom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Units" }),
        __metadata("design:type", Number)
    ], CisInstructionCisInstruction.prototype, "units", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VAT" }),
        __metadata("design:type", Number)
    ], CisInstructionCisInstruction.prototype, "vat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Value" }),
        __metadata("design:type", Number)
    ], CisInstructionCisInstruction.prototype, "value", void 0);
    return CisInstructionCisInstruction;
}(SpeakeasyBase));
export { CisInstructionCisInstruction };
var CisInstruction = /** @class */ (function (_super) {
    __extends(CisInstruction, _super);
    function CisInstruction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CisInstruction" }),
        __metadata("design:type", CisInstructionCisInstruction)
    ], CisInstruction.prototype, "cisInstruction", void 0);
    return CisInstruction;
}(SpeakeasyBase));
export { CisInstruction };
