import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetRelatedDashboard } from "./datasetrelateddashboard";



export class DatasetRelatedDashboards extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=result", elemType: DatasetRelatedDashboard })
  result?: DatasetRelatedDashboard[];
}
