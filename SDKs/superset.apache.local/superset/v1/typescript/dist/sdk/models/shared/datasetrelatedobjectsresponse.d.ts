import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetRelatedCharts } from "./datasetrelatedcharts";
import { DatasetRelatedDashboards } from "./datasetrelateddashboards";
export declare class DatasetRelatedObjectsResponse extends SpeakeasyBase {
    charts?: DatasetRelatedCharts;
    dashboards?: DatasetRelatedDashboards;
}
