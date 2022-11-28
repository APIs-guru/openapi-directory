import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CisInstructionCisInstructionPayFrequencyEnum {
    Monthly = "Monthly",
    Weekly = "Weekly"
}

export enum CisInstructionCisInstructionUomEnum {
    NotSet = "NotSet",
    Minute = "Minute",
    Hour = "Hour",
    Day = "Day",
    Week = "Week",
    Month = "Month",
    Year = "Year",
    Unit = "Unit"
}


export class CisInstructionCisInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CisLineTag" })
  cisLineTag?: string;

  @SpeakeasyMetadata({ data: "json, name=CisLineType" })
  cisLineType?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=PayFrequency" })
  payFrequency?: CisInstructionCisInstructionPayFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=PeriodEnd" })
  periodEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=PeriodStart" })
  periodStart?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxYearEnd" })
  taxYearEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxYearStart" })
  taxYearStart?: number;

  @SpeakeasyMetadata({ data: "json, name=UOM" })
  uom?: CisInstructionCisInstructionUomEnum;

  @SpeakeasyMetadata({ data: "json, name=Units" })
  units?: number;

  @SpeakeasyMetadata({ data: "json, name=VAT" })
  vat?: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}


export class CisInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CisInstruction" })
  cisInstruction?: CisInstructionCisInstruction;
}
