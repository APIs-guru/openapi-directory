import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatabaseRelatedChart } from "./databaserelatedchart";



export class DatabaseRelatedCharts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=result", elemType: DatabaseRelatedChart })
  result?: DatabaseRelatedChart[];
}
