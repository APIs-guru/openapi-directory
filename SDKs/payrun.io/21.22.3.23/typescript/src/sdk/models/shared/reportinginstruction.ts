import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportingInstructionReportingInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=TaxMonth" })
  taxMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxYear" })
  taxYear?: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}


export class ReportingInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReportingInstruction" })
  reportingInstruction?: ReportingInstructionReportingInstruction;
}
