import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta28 } from "./meta28";



export class QueryRestApiGet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changed_on" })
  changedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=database" })
  database: Meta28;

  @SpeakeasyMetadata({ data: "json, name=end_result_backend_time" })
  endResultBackendTime?: number;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: number;

  @SpeakeasyMetadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=executed_sql" })
  executedSql?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: number;

  @SpeakeasyMetadata({ data: "json, name=results_key" })
  resultsKey?: string;

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=select_as_cta" })
  selectAsCta?: boolean;

  @SpeakeasyMetadata({ data: "json, name=select_as_cta_used" })
  selectAsCtaUsed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=select_sql" })
  selectSql?: string;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;

  @SpeakeasyMetadata({ data: "json, name=sql_editor_id" })
  sqlEditorId?: string;

  @SpeakeasyMetadata({ data: "json, name=start_running_time" })
  startRunningTime?: number;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=tab_name" })
  tabName?: string;

  @SpeakeasyMetadata({ data: "json, name=tmp_schema_name" })
  tmpSchemaName?: string;

  @SpeakeasyMetadata({ data: "json, name=tmp_table_name" })
  tmpTableName?: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_url" })
  trackingUrl?: string;
}
