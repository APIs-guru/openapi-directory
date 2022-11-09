import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Database extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_multi_schema_metadata_fetch" })
  allowMultiSchemaMetadataFetch?: boolean;

  @Metadata({ data: "json, name=allows_cost_estimate" })
  allowsCostEstimate?: boolean;

  @Metadata({ data: "json, name=allows_subquery" })
  allowsSubquery?: boolean;

  @Metadata({ data: "json, name=allows_virtual_table_explore" })
  allowsVirtualTableExplore?: boolean;

  @Metadata({ data: "json, name=backend" })
  backend?: string;

  @Metadata({ data: "json, name=explore_database_id" })
  exploreDatabaseId?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
