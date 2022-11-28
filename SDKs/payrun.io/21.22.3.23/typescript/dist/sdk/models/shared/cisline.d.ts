import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CisLineCisLinePayFrequencyEnum {
    Monthly = "Monthly",
    Weekly = "Weekly"
}
export declare enum CisLineCisLineTaxTreatmentEnum {
    Taxable = "Taxable",
    NonTaxable = "NonTaxable",
    Notional = "Notional",
    Materials = "Materials"
}
export declare enum CisLineCisLineUomEnum {
    NotSet = "NotSet",
    Minute = "Minute",
    Hour = "Hour",
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year",
    Unit = "Unit"
}
export declare class CisLineCisLine extends SpeakeasyBase {
    cisDeduction?: number;
    cisLineType?: string;
    description?: string;
    generated?: Date;
    grossPay?: number;
    nominalCodeKey?: string;
    payFrequency?: CisLineCisLinePayFrequencyEnum;
    taxMonth?: number;
    taxPeriod?: number;
    taxTreatment?: CisLineCisLineTaxTreatmentEnum;
    taxYear?: number;
    uom?: CisLineCisLineUomEnum;
    unitRate?: number;
    units?: number;
    vat?: number;
}
export declare class CisLine extends SpeakeasyBase {
    cisLine?: CisLineCisLine;
}
