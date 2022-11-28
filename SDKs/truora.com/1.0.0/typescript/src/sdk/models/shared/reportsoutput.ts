import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";



// ReportsOutput
/** 
 * Represents the result of report searches
**/
export class ReportsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=reports", elemType: Report })
  reports: Report[];

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: string;
}
