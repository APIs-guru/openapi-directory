import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";



// ReportOutput
/** 
 * Reprents the report creation result
**/
export class ReportOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checks" })
  checks: string;

  @SpeakeasyMetadata({ data: "json, name=report" })
  report: Report;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;
}
