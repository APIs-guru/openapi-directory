import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta18 } from "./meta18";



export class DatabaseRestApiGetList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_csv_upload" })
  allowCsvUpload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_ctas" })
  allowCtas?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_cvas" })
  allowCvas?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_dml" })
  allowDml?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_multi_schema_metadata_fetch" })
  allowMultiSchemaMetadataFetch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_run_async" })
  allowRunAsync?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allows_cost_estimate" })
  allowsCostEstimate?: any;

  @SpeakeasyMetadata({ data: "json, name=allows_subquery" })
  allowsSubquery?: any;

  @SpeakeasyMetadata({ data: "json, name=allows_virtual_table_explore" })
  allowsVirtualTableExplore?: any;

  @SpeakeasyMetadata({ data: "json, name=backend" })
  backend?: any;

  @SpeakeasyMetadata({ data: "json, name=changed_on" })
  changedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: Meta18;

  @SpeakeasyMetadata({ data: "json, name=database_name" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=explore_database_id" })
  exploreDatabaseId?: any;

  @SpeakeasyMetadata({ data: "json, name=expose_in_sqllab" })
  exposeInSqllab?: boolean;

  @SpeakeasyMetadata({ data: "json, name=extra" })
  extra?: string;

  @SpeakeasyMetadata({ data: "json, name=force_ctas_schema" })
  forceCtasSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
