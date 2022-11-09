import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReportLineReportLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Generated" })
  generated?: Date;

  @Metadata({ data: "json, name=TaxMonth" })
  taxMonth?: number;

  @Metadata({ data: "json, name=TaxYear" })
  taxYear?: number;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}


export class ReportLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReportLine" })
  reportLine?: ReportLineReportLine;
}
