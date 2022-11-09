import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatabaseRelatedChart } from "./databaserelatedchart";


export class DatabaseRelatedCharts extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=result", elemType: shared.DatabaseRelatedChart })
  result?: DatabaseRelatedChart[];
}
