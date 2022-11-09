import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V3DisruptionRoute } from "./v3disruptionroute";
import { V3DisruptionStop } from "./v3disruptionstop";


export class V3Disruption extends SpeakeasyBase {
  @Metadata({ data: "json, name=colour" })
  colour?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=display_on_board" })
  displayOnBoard?: boolean;

  @Metadata({ data: "json, name=display_status" })
  displayStatus?: boolean;

  @Metadata({ data: "json, name=disruption_id" })
  disruptionId?: number;

  @Metadata({ data: "json, name=disruption_status" })
  disruptionStatus?: string;

  @Metadata({ data: "json, name=disruption_type" })
  disruptionType?: string;

  @Metadata({ data: "json, name=from_date" })
  fromDate?: Date;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=published_on" })
  publishedOn?: Date;

  @Metadata({ data: "json, name=routes", elemType: shared.V3DisruptionRoute })
  routes?: V3DisruptionRoute[];

  @Metadata({ data: "json, name=stops", elemType: shared.V3DisruptionStop })
  stops?: V3DisruptionStop[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=to_date" })
  toDate?: Date;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
