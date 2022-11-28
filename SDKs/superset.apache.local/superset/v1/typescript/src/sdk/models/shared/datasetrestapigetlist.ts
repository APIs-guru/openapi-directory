import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta19 } from "./meta19";
import { Meta21 } from "./meta21";
import { Meta20 } from "./meta20";



export class DatasetRestApiGetList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changed_by" })
  changedBy?: Meta19;

  @SpeakeasyMetadata({ data: "json, name=changed_by_name" })
  changedByName?: any;

  @SpeakeasyMetadata({ data: "json, name=changed_by_url" })
  changedByUrl?: any;

  @SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @SpeakeasyMetadata({ data: "json, name=changed_on_utc" })
  changedOnUtc?: any;

  @SpeakeasyMetadata({ data: "json, name=database" })
  database: Meta21;

  @SpeakeasyMetadata({ data: "json, name=default_endpoint" })
  defaultEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=explore_url" })
  exploreUrl?: any;

  @SpeakeasyMetadata({ data: "json, name=extra" })
  extra?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: any;

  @SpeakeasyMetadata({ data: "json, name=owners" })
  owners?: Meta20;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;

  @SpeakeasyMetadata({ data: "json, name=table_name" })
  tableName: string;
}
