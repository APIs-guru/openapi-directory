import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetRelatedCharts } from "./datasetrelatedcharts";
import { DatasetRelatedDashboards } from "./datasetrelateddashboards";



export class DatasetRelatedObjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=charts" })
  charts?: DatasetRelatedCharts;

  @SpeakeasyMetadata({ data: "json, name=dashboards" })
  dashboards?: DatasetRelatedDashboards;
}
