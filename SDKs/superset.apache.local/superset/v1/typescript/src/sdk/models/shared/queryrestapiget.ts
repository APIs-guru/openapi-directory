import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta28 } from "./meta28";


export class QueryRestApiGet extends SpeakeasyBase {
  @Metadata({ data: "json, name=changed_on" })
  changedOn?: Date;

  @Metadata({ data: "json, name=client_id" })
  clientId: string;

  @Metadata({ data: "json, name=database" })
  database: Meta28;

  @Metadata({ data: "json, name=end_result_backend_time" })
  endResultBackendTime?: number;

  @Metadata({ data: "json, name=end_time" })
  endTime?: number;

  @Metadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @Metadata({ data: "json, name=executed_sql" })
  executedSql?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=progress" })
  progress?: number;

  @Metadata({ data: "json, name=results_key" })
  resultsKey?: string;

  @Metadata({ data: "json, name=rows" })
  rows?: number;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=select_as_cta" })
  selectAsCta?: boolean;

  @Metadata({ data: "json, name=select_as_cta_used" })
  selectAsCtaUsed?: boolean;

  @Metadata({ data: "json, name=select_sql" })
  selectSql?: string;

  @Metadata({ data: "json, name=sql" })
  sql?: string;

  @Metadata({ data: "json, name=sql_editor_id" })
  sqlEditorId?: string;

  @Metadata({ data: "json, name=start_running_time" })
  startRunningTime?: number;

  @Metadata({ data: "json, name=start_time" })
  startTime?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=tab_name" })
  tabName?: string;

  @Metadata({ data: "json, name=tmp_schema_name" })
  tmpSchemaName?: string;

  @Metadata({ data: "json, name=tmp_table_name" })
  tmpTableName?: string;

  @Metadata({ data: "json, name=tracking_url" })
  trackingUrl?: string;
}
