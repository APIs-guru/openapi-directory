import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { User } from "./user";
import { User } from "./user";
import { Roles } from "./roles";


export class DashboardGetResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=changed_by" })
  changedBy?: User;

  @Metadata({ data: "json, name=changed_by_name" })
  changedByName?: string;

  @Metadata({ data: "json, name=changed_by_url" })
  changedByUrl?: string;

  @Metadata({ data: "json, name=changed_on" })
  changedOn?: Date;

  @Metadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: string;

  @Metadata({ data: "json, name=charts" })
  charts?: string[];

  @Metadata({ data: "json, name=css" })
  css?: string;

  @Metadata({ data: "json, name=dashboard_title" })
  dashboardTitle?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=json_metadata" })
  jsonMetadata?: string;

  @Metadata({ data: "json, name=owners", elemType: shared.User })
  owners?: User[];

  @Metadata({ data: "json, name=position_json" })
  positionJson?: string;

  @Metadata({ data: "json, name=published" })
  published?: boolean;

  @Metadata({ data: "json, name=roles", elemType: shared.Roles })
  roles?: Roles[];

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=table_names" })
  tableNames?: string;

  @Metadata({ data: "json, name=thumbnail_url" })
  thumbnailUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
