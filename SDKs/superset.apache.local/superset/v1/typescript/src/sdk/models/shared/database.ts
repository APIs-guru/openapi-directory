import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Database extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_multi_schema_metadata_fetch" })
  allowMultiSchemaMetadataFetch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allows_cost_estimate" })
  allowsCostEstimate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allows_subquery" })
  allowsSubquery?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allows_virtual_table_explore" })
  allowsVirtualTableExplore?: boolean;

  @SpeakeasyMetadata({ data: "json, name=backend" })
  backend?: string;

  @SpeakeasyMetadata({ data: "json, name=explore_database_id" })
  exploreDatabaseId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
