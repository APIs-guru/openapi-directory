import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta27 } from "./meta27";
import { Meta26 } from "./meta26";



export class QueryRestApiGetList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changed_on" })
  changedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=database" })
  database: Meta27;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: number;

  @SpeakeasyMetadata({ data: "json, name=executed_sql" })
  executedSql?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;

  @SpeakeasyMetadata({ data: "json, name=sql_tables" })
  sqlTables?: any;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=tab_name" })
  tabName?: string;

  @SpeakeasyMetadata({ data: "json, name=tmp_table_name" })
  tmpTableName?: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_url" })
  trackingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: Meta26;
}
