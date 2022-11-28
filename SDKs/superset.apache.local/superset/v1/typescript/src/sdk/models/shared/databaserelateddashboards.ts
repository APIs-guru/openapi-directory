import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatabaseRelatedDashboard } from "./databaserelateddashboard";



export class DatabaseRelatedDashboards extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=result", elemType: DatabaseRelatedDashboard })
  result?: DatabaseRelatedDashboard[];
}
