import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatabaseRelatedDashboard } from "./databaserelateddashboard";


export class DatabaseRelatedDashboards extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=result", elemType: shared.DatabaseRelatedDashboard })
  result?: DatabaseRelatedDashboard[];
}
