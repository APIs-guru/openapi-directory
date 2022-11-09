import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CountryEnum } from "./countryenum";

export enum TaxSubtotalTaxCategoryEnum {
    Standard = "standard"
,    ZeroRated = "zero_rated"
,    ReverseCharge = "reverse_charge"
,    IntraCommunity = "intra_community"
,    Exempt = "exempt"
,    Export = "export"
,    OutsideScope = "outside_scope"
,    Regulation33Exempt = "regulation33_exempt"
,    Nonregulation33Exempt = "nonregulation33_exempt"
,    DeemedSupply = "deemed_supply"
,    SrcaS = "srca_s"
,    SrcaC = "srca_c"
,    NotRegistered = "not_registered"
,    SalesTaxWork = "sales_tax_work"
,    ServiceTax = "service_tax"
,    ServiceTaxImport = "service_tax_import"
,    SalesToExportMarket = "sales_to_export_market"
,    SalesToSpecialArea = "sales_to_special_area"
,    SalesToDesignatedArea = "sales_to_designated_area"
,    ExemptionScheduleA = "exemption_schedule_a"
,    ExemptionScheduleB = "exemption_schedule_b"
,    ExemptionScheduleCA = "exemption_schedule_c_a"
,    ExemptionScheduleCB = "exemption_schedule_c_b"
,    ExemptionScheduleCC = "exemption_schedule_c_c"
,    ExemptionServiceTax = "exemption_service_tax"
}


// TaxSubtotal
/** 
 * The total amount of tax of this type in the invoice.
**/
export class TaxSubtotal extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: TaxSubtotalTaxCategoryEnum;

  @Metadata({ data: "json, name=country" })
  country?: CountryEnum;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @Metadata({ data: "json, name=taxableAmount" })
  taxableAmount: number;
}
