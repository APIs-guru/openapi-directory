import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CisInstructionCisInstructionPayFrequencyEnum {
    Monthly = "Monthly"
,    Weekly = "Weekly"
}

export enum CisInstructionCisInstructionUomEnum {
    NotSet = "NotSet"
,    Minute = "Minute"
,    Hour = "Hour"
,    Day = "Day"
,    Week = "Week"
,    Month = "Month"
,    Year = "Year"
,    Unit = "Unit"
}


export class CisInstructionCisInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=CisLineTag" })
  cisLineTag?: string;

  @Metadata({ data: "json, name=CisLineType" })
  cisLineType?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=PayFrequency" })
  payFrequency?: CisInstructionCisInstructionPayFrequencyEnum;

  @Metadata({ data: "json, name=PeriodEnd" })
  periodEnd?: number;

  @Metadata({ data: "json, name=PeriodStart" })
  periodStart?: number;

  @Metadata({ data: "json, name=TaxYearEnd" })
  taxYearEnd?: number;

  @Metadata({ data: "json, name=TaxYearStart" })
  taxYearStart?: number;

  @Metadata({ data: "json, name=UOM" })
  uom?: CisInstructionCisInstructionUomEnum;

  @Metadata({ data: "json, name=Units" })
  units?: number;

  @Metadata({ data: "json, name=VAT" })
  vat?: number;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}


export class CisInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=CisInstruction" })
  cisInstruction?: CisInstructionCisInstruction;
}
