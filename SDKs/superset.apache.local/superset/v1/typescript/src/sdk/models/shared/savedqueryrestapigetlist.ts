import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta29 } from "./meta29";
import { Meta30 } from "./meta30";


export class SavedQueryRestApiGetList extends SpeakeasyBase {
  @Metadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: Meta29;

  @Metadata({ data: "json, name=created_on" })
  createdOn?: Date;

  @Metadata({ data: "json, name=database" })
  database?: Meta30;

  @Metadata({ data: "json, name=db_id" })
  dbId?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=extra" })
  extra?: any;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=last_run_delta_humanized" })
  lastRunDeltaHumanized?: any;

  @Metadata({ data: "json, name=rows" })
  rows?: number;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=sql" })
  sql?: string;

  @Metadata({ data: "json, name=sql_tables" })
  sqlTables?: any;
}
