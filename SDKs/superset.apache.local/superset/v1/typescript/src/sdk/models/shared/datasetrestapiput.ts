import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetColumnsPut } from "./datasetcolumnsput";
import { DatasetMetricsPut } from "./datasetmetricsput";



export class DatasetRestApiPut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cache_timeout" })
  cacheTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=columns", elemType: DatasetColumnsPut })
  columns?: DatasetColumnsPut[];

  @SpeakeasyMetadata({ data: "json, name=database_id" })
  databaseId?: number;

  @SpeakeasyMetadata({ data: "json, name=default_endpoint" })
  defaultEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=extra" })
  extra?: string;

  @SpeakeasyMetadata({ data: "json, name=fetch_values_predicate" })
  fetchValuesPredicate?: string;

  @SpeakeasyMetadata({ data: "json, name=filter_select_enabled" })
  filterSelectEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_sqllab_view" })
  isSqllabView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=main_dttm_col" })
  mainDttmCol?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: DatasetMetricsPut })
  metrics?: DatasetMetricsPut[];

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=owners" })
  owners?: number[];

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;

  @SpeakeasyMetadata({ data: "json, name=table_name" })
  tableName?: string;

  @SpeakeasyMetadata({ data: "json, name=template_params" })
  templateParams?: string;
}
