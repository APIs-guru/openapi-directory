import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportLineReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Generated" })
  generated?: Date;

  @SpeakeasyMetadata({ data: "json, name=TaxMonth" })
  taxMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxYear" })
  taxYear?: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}


export class ReportLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReportLine" })
  reportLine?: ReportLineReportLine;
}
