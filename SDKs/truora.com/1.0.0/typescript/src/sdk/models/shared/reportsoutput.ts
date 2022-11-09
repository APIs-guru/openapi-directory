import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Report } from "./report";


// ReportsOutput
/** 
 * Represents the result of report searches
**/
export class ReportsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=reports", elemType: shared.Report })
  reports: Report[];

  @Metadata({ data: "json, name=self" })
  self: string;
}
