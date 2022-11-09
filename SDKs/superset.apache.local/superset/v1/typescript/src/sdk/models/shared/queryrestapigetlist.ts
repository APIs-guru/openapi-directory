import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta27 } from "./meta27";
import { Meta26 } from "./meta26";


export class QueryRestApiGetList extends SpeakeasyBase {
  @Metadata({ data: "json, name=changed_on" })
  changedOn?: Date;

  @Metadata({ data: "json, name=database" })
  database: Meta27;

  @Metadata({ data: "json, name=end_time" })
  endTime?: number;

  @Metadata({ data: "json, name=executed_sql" })
  executedSql?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=rows" })
  rows?: number;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=sql" })
  sql?: string;

  @Metadata({ data: "json, name=sql_tables" })
  sqlTables?: any;

  @Metadata({ data: "json, name=start_time" })
  startTime?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=tab_name" })
  tabName?: string;

  @Metadata({ data: "json, name=tmp_table_name" })
  tmpTableName?: string;

  @Metadata({ data: "json, name=tracking_url" })
  trackingUrl?: string;

  @Metadata({ data: "json, name=user" })
  user?: Meta26;
}
