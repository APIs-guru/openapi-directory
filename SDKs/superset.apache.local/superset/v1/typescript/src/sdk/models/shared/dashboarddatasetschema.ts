import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Database } from "./database";


export class DashboardDatasetSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=cache_timeout" })
  cacheTimeout?: number;

  @Metadata({ data: "json, name=column_formats" })
  columnFormats?: Map<string, any>;

  @Metadata({ data: "json, name=column_types" })
  columnTypes?: number[];

  @Metadata({ data: "json, name=columns" })
  columns?: Map<string, any>[];

  @Metadata({ data: "json, name=database" })
  database?: Database;

  @Metadata({ data: "json, name=datasource_name" })
  datasourceName?: string;

  @Metadata({ data: "json, name=default_endpoint" })
  defaultEndpoint?: string;

  @Metadata({ data: "json, name=edit_url" })
  editUrl?: string;

  @Metadata({ data: "json, name=fetch_values_predicate" })
  fetchValuesPredicate?: string;

  @Metadata({ data: "json, name=filter_select" })
  filterSelect?: boolean;

  @Metadata({ data: "json, name=filter_select_enabled" })
  filterSelectEnabled?: boolean;

  @Metadata({ data: "json, name=granularity_sqla" })
  granularitySqla?: string[][];

  @Metadata({ data: "json, name=health_check_message" })
  healthCheckMessage?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=is_sqllab_view" })
  isSqllabView?: boolean;

  @Metadata({ data: "json, name=main_dttm_col" })
  mainDttmCol?: string;

  @Metadata({ data: "json, name=metrics" })
  metrics?: Map<string, any>[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=order_by_choices" })
  orderByChoices?: string[][];

  @Metadata({ data: "json, name=owners" })
  owners?: number[];

  @Metadata({ data: "json, name=params" })
  params?: string;

  @Metadata({ data: "json, name=perm" })
  perm?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=select_star" })
  selectStar?: string;

  @Metadata({ data: "json, name=sql" })
  sql?: string;

  @Metadata({ data: "json, name=table_name" })
  tableName?: string;

  @Metadata({ data: "json, name=template_params" })
  templateParams?: string;

  @Metadata({ data: "json, name=time_grain_sqla" })
  timeGrainSqla?: string[][];

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=verbose_map" })
  verboseMap?: Map<string, string>;
}
