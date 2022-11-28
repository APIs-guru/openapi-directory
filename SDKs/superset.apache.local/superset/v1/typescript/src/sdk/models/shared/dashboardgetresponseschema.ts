import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { Roles } from "./roles";



export class DashboardGetResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changed_by" })
  changedBy?: User;

  @SpeakeasyMetadata({ data: "json, name=changed_by_name" })
  changedByName?: string;

  @SpeakeasyMetadata({ data: "json, name=changed_by_url" })
  changedByUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=changed_on" })
  changedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: string;

  @SpeakeasyMetadata({ data: "json, name=charts" })
  charts?: string[];

  @SpeakeasyMetadata({ data: "json, name=css" })
  css?: string;

  @SpeakeasyMetadata({ data: "json, name=dashboard_title" })
  dashboardTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=json_metadata" })
  jsonMetadata?: string;

  @SpeakeasyMetadata({ data: "json, name=owners", elemType: User })
  owners?: User[];

  @SpeakeasyMetadata({ data: "json, name=position_json" })
  positionJson?: string;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: boolean;

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: Roles })
  roles?: Roles[];

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=table_names" })
  tableNames?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail_url" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
