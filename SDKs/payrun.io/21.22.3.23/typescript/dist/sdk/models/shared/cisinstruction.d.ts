import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CisInstructionCisInstructionPayFrequencyEnum {
    Monthly = "Monthly",
    Weekly = "Weekly"
}
export declare enum CisInstructionCisInstructionUomEnum {
    NotSet = "NotSet",
    Minute = "Minute",
    Hour = "Hour",
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year",
    Unit = "Unit"
}
export declare class CisInstructionCisInstruction extends SpeakeasyBase {
    cisLineTag?: string;
    cisLineType?: string;
    description?: string;
    payFrequency?: CisInstructionCisInstructionPayFrequencyEnum;
    periodEnd?: number;
    periodStart?: number;
    taxYearEnd?: number;
    taxYearStart?: number;
    uom?: CisInstructionCisInstructionUomEnum;
    units?: number;
    vat?: number;
    value?: number;
}
export declare class CisInstruction extends SpeakeasyBase {
    cisInstruction?: CisInstructionCisInstruction;
}
