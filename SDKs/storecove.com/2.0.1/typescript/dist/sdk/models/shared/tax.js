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
import { CountryEnum } from "./countryenum";
export var TaxTaxCategoryEnum;
(function (TaxTaxCategoryEnum) {
    TaxTaxCategoryEnum["Standard"] = "standard";
    TaxTaxCategoryEnum["ZeroRated"] = "zero_rated";
    TaxTaxCategoryEnum["ReverseCharge"] = "reverse_charge";
    TaxTaxCategoryEnum["IntraCommunity"] = "intra_community";
    TaxTaxCategoryEnum["Exempt"] = "exempt";
    TaxTaxCategoryEnum["Export"] = "export";
    TaxTaxCategoryEnum["OutsideScope"] = "outside_scope";
    TaxTaxCategoryEnum["Regulation33Exempt"] = "regulation33_exempt";
    TaxTaxCategoryEnum["Nonregulation33Exempt"] = "nonregulation33_exempt";
    TaxTaxCategoryEnum["DeemedSupply"] = "deemed_supply";
    TaxTaxCategoryEnum["SrcaS"] = "srca_s";
    TaxTaxCategoryEnum["SrcaC"] = "srca_c";
    TaxTaxCategoryEnum["NotRegistered"] = "not_registered";
    TaxTaxCategoryEnum["SalesTax"] = "sales_tax";
    TaxTaxCategoryEnum["SalesTaxWork"] = "sales_tax_work";
    TaxTaxCategoryEnum["ServiceTax"] = "service_tax";
    TaxTaxCategoryEnum["ServiceTaxImport"] = "service_tax_import";
    TaxTaxCategoryEnum["SalesToExportMarket"] = "sales_to_export_market";
    TaxTaxCategoryEnum["SalesToSpecialArea"] = "sales_to_special_area";
    TaxTaxCategoryEnum["SalesToDesignatedArea"] = "sales_to_designated_area";
    TaxTaxCategoryEnum["ExemptionScheduleA"] = "exemption_schedule_a";
    TaxTaxCategoryEnum["ExemptionScheduleB"] = "exemption_schedule_b";
    TaxTaxCategoryEnum["ExemptionScheduleCA"] = "exemption_schedule_c_a";
    TaxTaxCategoryEnum["ExemptionScheduleCB"] = "exemption_schedule_c_b";
    TaxTaxCategoryEnum["ExemptionScheduleCC"] = "exemption_schedule_c_c";
    TaxTaxCategoryEnum["ExemptionServiceTax"] = "exemption_service_tax";
})(TaxTaxCategoryEnum || (TaxTaxCategoryEnum = {}));
var Tax = /** @class */ (function (_super) {
    __extends(Tax, _super);
    function Tax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], Tax.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], Tax.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], Tax.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentage" }),
        __metadata("design:type", Number)
    ], Tax.prototype, "percentage", void 0);
    return Tax;
}(SpeakeasyBase));
export { Tax };
