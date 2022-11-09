import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatabaseRelatedCharts } from "./databaserelatedcharts";
import { DatabaseRelatedDashboards } from "./databaserelateddashboards";


export class DatabaseRelatedObjectsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=charts" })
  charts?: DatabaseRelatedCharts;

  @Metadata({ data: "json, name=dashboards" })
  dashboards?: DatabaseRelatedDashboards;
}
