import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetRelatedDashboard } from "./datasetrelateddashboard";


export class DatasetRelatedDashboards extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=result", elemType: shared.DatasetRelatedDashboard })
  result?: DatasetRelatedDashboard[];
}
