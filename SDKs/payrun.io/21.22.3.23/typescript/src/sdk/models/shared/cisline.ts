import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CisLineCisLinePayFrequencyEnum {
    Monthly = "Monthly",
    Weekly = "Weekly"
}

export enum CisLineCisLineTaxTreatmentEnum {
    Taxable = "Taxable",
    NonTaxable = "NonTaxable",
    Notional = "Notional",
    Materials = "Materials"
}

export enum CisLineCisLineUomEnum {
    NotSet = "NotSet",
    Minute = "Minute",
    Hour = "Hour",
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year",
    Unit = "Unit"
}


export class CisLineCisLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CisDeduction" })
  cisDeduction?: number;

  @SpeakeasyMetadata({ data: "json, name=CisLineType" })
  cisLineType?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Generated" })
  generated?: Date;

  @SpeakeasyMetadata({ data: "json, name=GrossPay" })
  grossPay?: number;

  @SpeakeasyMetadata({ data: "json, name=NominalCodeKey" })
  nominalCodeKey?: string;

  @SpeakeasyMetadata({ data: "json, name=PayFrequency" })
  payFrequency?: CisLineCisLinePayFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=TaxMonth" })
  taxMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxPeriod" })
  taxPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxTreatment" })
  taxTreatment?: CisLineCisLineTaxTreatmentEnum;

  @SpeakeasyMetadata({ data: "json, name=TaxYear" })
  taxYear?: number;

  @SpeakeasyMetadata({ data: "json, name=UOM" })
  uom?: CisLineCisLineUomEnum;

  @SpeakeasyMetadata({ data: "json, name=UnitRate" })
  unitRate?: number;

  @SpeakeasyMetadata({ data: "json, name=Units" })
  units?: number;

  @SpeakeasyMetadata({ data: "json, name=VAT" })
  vat?: number;
}


export class CisLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CisLine" })
  cisLine?: CisLineCisLine;
}
