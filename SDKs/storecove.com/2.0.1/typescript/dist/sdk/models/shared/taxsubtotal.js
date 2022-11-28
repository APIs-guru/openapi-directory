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
export var TaxSubtotalTaxCategoryEnum;
(function (TaxSubtotalTaxCategoryEnum) {
    TaxSubtotalTaxCategoryEnum["Standard"] = "standard";
    TaxSubtotalTaxCategoryEnum["ZeroRated"] = "zero_rated";
    TaxSubtotalTaxCategoryEnum["ReverseCharge"] = "reverse_charge";
    TaxSubtotalTaxCategoryEnum["IntraCommunity"] = "intra_community";
    TaxSubtotalTaxCategoryEnum["Exempt"] = "exempt";
    TaxSubtotalTaxCategoryEnum["Export"] = "export";
    TaxSubtotalTaxCategoryEnum["OutsideScope"] = "outside_scope";
    TaxSubtotalTaxCategoryEnum["Regulation33Exempt"] = "regulation33_exempt";
    TaxSubtotalTaxCategoryEnum["Nonregulation33Exempt"] = "nonregulation33_exempt";
    TaxSubtotalTaxCategoryEnum["DeemedSupply"] = "deemed_supply";
    TaxSubtotalTaxCategoryEnum["SrcaS"] = "srca_s";
    TaxSubtotalTaxCategoryEnum["SrcaC"] = "srca_c";
    TaxSubtotalTaxCategoryEnum["NotRegistered"] = "not_registered";
    TaxSubtotalTaxCategoryEnum["SalesTaxWork"] = "sales_tax_work";
    TaxSubtotalTaxCategoryEnum["ServiceTax"] = "service_tax";
    TaxSubtotalTaxCategoryEnum["ServiceTaxImport"] = "service_tax_import";
    TaxSubtotalTaxCategoryEnum["SalesToExportMarket"] = "sales_to_export_market";
    TaxSubtotalTaxCategoryEnum["SalesToSpecialArea"] = "sales_to_special_area";
    TaxSubtotalTaxCategoryEnum["SalesToDesignatedArea"] = "sales_to_designated_area";
    TaxSubtotalTaxCategoryEnum["ExemptionScheduleA"] = "exemption_schedule_a";
    TaxSubtotalTaxCategoryEnum["ExemptionScheduleB"] = "exemption_schedule_b";
    TaxSubtotalTaxCategoryEnum["ExemptionScheduleCA"] = "exemption_schedule_c_a";
    TaxSubtotalTaxCategoryEnum["ExemptionScheduleCB"] = "exemption_schedule_c_b";
    TaxSubtotalTaxCategoryEnum["ExemptionScheduleCC"] = "exemption_schedule_c_c";
    TaxSubtotalTaxCategoryEnum["ExemptionServiceTax"] = "exemption_service_tax";
})(TaxSubtotalTaxCategoryEnum || (TaxSubtotalTaxCategoryEnum = {}));
// TaxSubtotal
/**
 * The total amount of tax of this type in the invoice.
**/
var TaxSubtotal = /** @class */ (function (_super) {
    __extends(TaxSubtotal, _super);
    function TaxSubtotal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], TaxSubtotal.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], TaxSubtotal.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentage" }),
        __metadata("design:type", Number)
    ], TaxSubtotal.prototype, "percentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxAmount" }),
        __metadata("design:type", Number)
    ], TaxSubtotal.prototype, "taxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxableAmount" }),
        __metadata("design:type", Number)
    ], TaxSubtotal.prototype, "taxableAmount", void 0);
    return TaxSubtotal;
}(SpeakeasyBase));
export { TaxSubtotal };
