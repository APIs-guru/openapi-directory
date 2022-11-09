import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetColumnsPut } from "./datasetcolumnsput";
import { DatasetMetricsPut } from "./datasetmetricsput";


export class DatasetRestApiPut extends SpeakeasyBase {
  @Metadata({ data: "json, name=cache_timeout" })
  cacheTimeout?: number;

  @Metadata({ data: "json, name=columns", elemType: shared.DatasetColumnsPut })
  columns?: DatasetColumnsPut[];

  @Metadata({ data: "json, name=database_id" })
  databaseId?: number;

  @Metadata({ data: "json, name=default_endpoint" })
  defaultEndpoint?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=extra" })
  extra?: string;

  @Metadata({ data: "json, name=fetch_values_predicate" })
  fetchValuesPredicate?: string;

  @Metadata({ data: "json, name=filter_select_enabled" })
  filterSelectEnabled?: boolean;

  @Metadata({ data: "json, name=is_sqllab_view" })
  isSqllabView?: boolean;

  @Metadata({ data: "json, name=main_dttm_col" })
  mainDttmCol?: string;

  @Metadata({ data: "json, name=metrics", elemType: shared.DatasetMetricsPut })
  metrics?: DatasetMetricsPut[];

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=owners" })
  owners?: number[];

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=sql" })
  sql?: string;

  @Metadata({ data: "json, name=table_name" })
  tableName?: string;

  @Metadata({ data: "json, name=template_params" })
  templateParams?: string;
}
