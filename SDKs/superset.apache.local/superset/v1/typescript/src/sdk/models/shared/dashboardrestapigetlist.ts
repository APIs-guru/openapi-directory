import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta15 } from "./meta15";
import { Meta14 } from "./meta14";
import { Meta17 } from "./meta17";
import { Meta16 } from "./meta16";


export class DashboardRestApiGetList extends SpeakeasyBase {
  @Metadata({ data: "json, name=changed_by" })
  changedBy?: Meta15;

  @Metadata({ data: "json, name=changed_by_name" })
  changedByName?: any;

  @Metadata({ data: "json, name=changed_by_url" })
  changedByUrl?: any;

  @Metadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @Metadata({ data: "json, name=changed_on_utc" })
  changedOnUtc?: any;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: Meta14;

  @Metadata({ data: "json, name=css" })
  css?: string;

  @Metadata({ data: "json, name=dashboard_title" })
  dashboardTitle?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=json_metadata" })
  jsonMetadata?: string;

  @Metadata({ data: "json, name=owners" })
  owners?: Meta17;

  @Metadata({ data: "json, name=position_json" })
  positionJson?: string;

  @Metadata({ data: "json, name=published" })
  published?: boolean;

  @Metadata({ data: "json, name=roles" })
  roles?: Meta16;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=status" })
  status?: any;

  @Metadata({ data: "json, name=thumbnail_url" })
  thumbnailUrl?: any;

  @Metadata({ data: "json, name=url" })
  url?: any;
}
