import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta29 } from "./meta29";
import { Meta30 } from "./meta30";



export class SavedQueryRestApiGetList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: Meta29;

  @SpeakeasyMetadata({ data: "json, name=created_on" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: Meta30;

  @SpeakeasyMetadata({ data: "json, name=db_id" })
  dbId?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=extra" })
  extra?: any;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=last_run_delta_humanized" })
  lastRunDeltaHumanized?: any;

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;

  @SpeakeasyMetadata({ data: "json, name=sql_tables" })
  sqlTables?: any;
}
