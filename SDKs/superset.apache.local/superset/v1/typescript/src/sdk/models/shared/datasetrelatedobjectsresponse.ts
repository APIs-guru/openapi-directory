import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetRelatedCharts } from "./datasetrelatedcharts";
import { DatasetRelatedDashboards } from "./datasetrelateddashboards";


export class DatasetRelatedObjectsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=charts" })
  charts?: DatasetRelatedCharts;

  @Metadata({ data: "json, name=dashboards" })
  dashboards?: DatasetRelatedDashboards;
}
