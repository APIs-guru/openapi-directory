import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Database } from "./database";



export class DashboardDatasetSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cache_timeout" })
  cacheTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=column_formats" })
  columnFormats?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=column_types" })
  columnTypes?: number[];

  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: Database;

  @SpeakeasyMetadata({ data: "json, name=datasource_name" })
  datasourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=default_endpoint" })
  defaultEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=edit_url" })
  editUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=fetch_values_predicate" })
  fetchValuesPredicate?: string;

  @SpeakeasyMetadata({ data: "json, name=filter_select" })
  filterSelect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=filter_select_enabled" })
  filterSelectEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=granularity_sqla" })
  granularitySqla?: string[][];

  @SpeakeasyMetadata({ data: "json, name=health_check_message" })
  healthCheckMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_sqllab_view" })
  isSqllabView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=main_dttm_col" })
  mainDttmCol?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=order_by_choices" })
  orderByChoices?: string[][];

  @SpeakeasyMetadata({ data: "json, name=owners" })
  owners?: number[];

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: string;

  @SpeakeasyMetadata({ data: "json, name=perm" })
  perm?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=select_star" })
  selectStar?: string;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;

  @SpeakeasyMetadata({ data: "json, name=table_name" })
  tableName?: string;

  @SpeakeasyMetadata({ data: "json, name=template_params" })
  templateParams?: string;

  @SpeakeasyMetadata({ data: "json, name=time_grain_sqla" })
  timeGrainSqla?: string[][];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=verbose_map" })
  verboseMap?: Map<string, string>;
}
