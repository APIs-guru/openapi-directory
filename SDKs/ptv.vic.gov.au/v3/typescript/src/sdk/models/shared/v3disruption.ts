import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3DisruptionRoute } from "./v3disruptionroute";
import { V3DisruptionStop } from "./v3disruptionstop";



export class V3Disruption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colour" })
  colour?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=display_on_board" })
  displayOnBoard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=display_status" })
  displayStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disruption_id" })
  disruptionId?: number;

  @SpeakeasyMetadata({ data: "json, name=disruption_status" })
  disruptionStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=disruption_type" })
  disruptionType?: string;

  @SpeakeasyMetadata({ data: "json, name=from_date" })
  fromDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=published_on" })
  publishedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: V3DisruptionRoute })
  routes?: V3DisruptionRoute[];

  @SpeakeasyMetadata({ data: "json, name=stops", elemType: V3DisruptionStop })
  stops?: V3DisruptionStop[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=to_date" })
  toDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
