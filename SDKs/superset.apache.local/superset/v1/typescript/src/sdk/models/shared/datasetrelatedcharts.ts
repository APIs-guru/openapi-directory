import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetRelatedChart } from "./datasetrelatedchart";


export class DatasetRelatedCharts extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=result", elemType: shared.DatasetRelatedChart })
  result?: DatasetRelatedChart[];
}
