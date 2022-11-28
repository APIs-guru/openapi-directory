import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseRelatedCharts } from "./databaserelatedcharts";
import { DatabaseRelatedDashboards } from "./databaserelateddashboards";
export declare class DatabaseRelatedObjectsResponse extends SpeakeasyBase {
    charts?: DatabaseRelatedCharts;
    dashboards?: DatabaseRelatedDashboards;
}
