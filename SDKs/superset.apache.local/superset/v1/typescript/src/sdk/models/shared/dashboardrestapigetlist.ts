import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta15 } from "./meta15";
import { Meta14 } from "./meta14";
import { Meta17 } from "./meta17";
import { Meta16 } from "./meta16";



export class DashboardRestApiGetList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changed_by" })
  changedBy?: Meta15;

  @SpeakeasyMetadata({ data: "json, name=changed_by_name" })
  changedByName?: any;

  @SpeakeasyMetadata({ data: "json, name=changed_by_url" })
  changedByUrl?: any;

  @SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @SpeakeasyMetadata({ data: "json, name=changed_on_utc" })
  changedOnUtc?: any;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: Meta14;

  @SpeakeasyMetadata({ data: "json, name=css" })
  css?: string;

  @SpeakeasyMetadata({ data: "json, name=dashboard_title" })
  dashboardTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=json_metadata" })
  jsonMetadata?: string;

  @SpeakeasyMetadata({ data: "json, name=owners" })
  owners?: Meta17;

  @SpeakeasyMetadata({ data: "json, name=position_json" })
  positionJson?: string;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: boolean;

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles?: Meta16;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: any;

  @SpeakeasyMetadata({ data: "json, name=thumbnail_url" })
  thumbnailUrl?: any;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: any;
}
