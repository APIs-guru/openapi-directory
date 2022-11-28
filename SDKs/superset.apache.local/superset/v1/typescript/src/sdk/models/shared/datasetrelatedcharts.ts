import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetRelatedChart } from "./datasetrelatedchart";



export class DatasetRelatedCharts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=result", elemType: DatasetRelatedChart })
  result?: DatasetRelatedChart[];
}
