import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta19 } from "./meta19";
import { Meta21 } from "./meta21";
import { Meta20 } from "./meta20";


export class DatasetRestApiGetList extends SpeakeasyBase {
  @Metadata({ data: "json, name=changed_by" })
  changedBy?: Meta19;

  @Metadata({ data: "json, name=changed_by_name" })
  changedByName?: any;

  @Metadata({ data: "json, name=changed_by_url" })
  changedByUrl?: any;

  @Metadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @Metadata({ data: "json, name=changed_on_utc" })
  changedOnUtc?: any;

  @Metadata({ data: "json, name=database" })
  database: Meta21;

  @Metadata({ data: "json, name=default_endpoint" })
  defaultEndpoint?: string;

  @Metadata({ data: "json, name=explore_url" })
  exploreUrl?: any;

  @Metadata({ data: "json, name=extra" })
  extra?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: any;

  @Metadata({ data: "json, name=owners" })
  owners?: Meta20;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=sql" })
  sql?: string;

  @Metadata({ data: "json, name=table_name" })
  tableName: string;
}
