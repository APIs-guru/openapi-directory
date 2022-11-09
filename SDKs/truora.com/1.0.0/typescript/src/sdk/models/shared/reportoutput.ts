import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Report } from "./report";


// ReportOutput
/** 
 * Reprents the report creation result
**/
export class ReportOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=checks" })
  checks: string;

  @Metadata({ data: "json, name=report" })
  report: Report;

  @Metadata({ data: "json, name=self" })
  self?: string;
}
