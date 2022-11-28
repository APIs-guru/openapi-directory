import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatabaseRelatedCharts } from "./databaserelatedcharts";
import { DatabaseRelatedDashboards } from "./databaserelateddashboards";



export class DatabaseRelatedObjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=charts" })
  charts?: DatabaseRelatedCharts;

  @SpeakeasyMetadata({ data: "json, name=dashboards" })
  dashboards?: DatabaseRelatedDashboards;
}
