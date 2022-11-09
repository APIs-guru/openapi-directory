import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReportingInstructionReportingInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=TaxMonth" })
  taxMonth?: number;

  @Metadata({ data: "json, name=TaxYear" })
  taxYear?: number;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}


export class ReportingInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReportingInstruction" })
  reportingInstruction?: ReportingInstructionReportingInstruction;
}
