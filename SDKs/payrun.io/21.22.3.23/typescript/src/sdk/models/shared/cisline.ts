import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CisLineCisLinePayFrequencyEnum {
    Monthly = "Monthly"
,    Weekly = "Weekly"
}

export enum CisLineCisLineTaxTreatmentEnum {
    Taxable = "Taxable"
,    NonTaxable = "NonTaxable"
,    Notional = "Notional"
,    Materials = "Materials"
}

export enum CisLineCisLineUomEnum {
    NotSet = "NotSet"
,    Minute = "Minute"
,    Hour = "Hour"
,    Day = "Day"
,    Week = "Week"
,    Month = "Month"
,    Year = "Year"
,    Unit = "Unit"
}


export class CisLineCisLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=CisDeduction" })
  cisDeduction?: number;

  @Metadata({ data: "json, name=CisLineType" })
  cisLineType?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Generated" })
  generated?: Date;

  @Metadata({ data: "json, name=GrossPay" })
  grossPay?: number;

  @Metadata({ data: "json, name=NominalCodeKey" })
  nominalCodeKey?: string;

  @Metadata({ data: "json, name=PayFrequency" })
  payFrequency?: CisLineCisLinePayFrequencyEnum;

  @Metadata({ data: "json, name=TaxMonth" })
  taxMonth?: number;

  @Metadata({ data: "json, name=TaxPeriod" })
  taxPeriod?: number;

  @Metadata({ data: "json, name=TaxTreatment" })
  taxTreatment?: CisLineCisLineTaxTreatmentEnum;

  @Metadata({ data: "json, name=TaxYear" })
  taxYear?: number;

  @Metadata({ data: "json, name=UOM" })
  uom?: CisLineCisLineUomEnum;

  @Metadata({ data: "json, name=UnitRate" })
  unitRate?: number;

  @Metadata({ data: "json, name=Units" })
  units?: number;

  @Metadata({ data: "json, name=VAT" })
  vat?: number;
}


export class CisLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=CisLine" })
  cisLine?: CisLineCisLine;
}
