import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta18 } from "./meta18";


export class DatabaseRestApiGetList extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_csv_upload" })
  allowCsvUpload?: boolean;

  @Metadata({ data: "json, name=allow_ctas" })
  allowCtas?: boolean;

  @Metadata({ data: "json, name=allow_cvas" })
  allowCvas?: boolean;

  @Metadata({ data: "json, name=allow_dml" })
  allowDml?: boolean;

  @Metadata({ data: "json, name=allow_multi_schema_metadata_fetch" })
  allowMultiSchemaMetadataFetch?: boolean;

  @Metadata({ data: "json, name=allow_run_async" })
  allowRunAsync?: boolean;

  @Metadata({ data: "json, name=allows_cost_estimate" })
  allowsCostEstimate?: any;

  @Metadata({ data: "json, name=allows_subquery" })
  allowsSubquery?: any;

  @Metadata({ data: "json, name=allows_virtual_table_explore" })
  allowsVirtualTableExplore?: any;

  @Metadata({ data: "json, name=backend" })
  backend?: any;

  @Metadata({ data: "json, name=changed_on" })
  changedOn?: Date;

  @Metadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: Meta18;

  @Metadata({ data: "json, name=database_name" })
  databaseName: string;

  @Metadata({ data: "json, name=explore_database_id" })
  exploreDatabaseId?: any;

  @Metadata({ data: "json, name=expose_in_sqllab" })
  exposeInSqllab?: boolean;

  @Metadata({ data: "json, name=extra" })
  extra?: string;

  @Metadata({ data: "json, name=force_ctas_schema" })
  forceCtasSchema?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;
}
