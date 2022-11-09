import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta22 } from "./meta22";
import { Meta23 } from "./meta23";
import { Meta25 } from "./meta25";
import { Meta24 } from "./meta24";


export class DatasetRestApiGet extends SpeakeasyBase {
  @Metadata({ data: "json, name=cache_timeout" })
  cacheTimeout?: number;

  @Metadata({ data: "json, name=columns" })
  columns: Meta22;

  @Metadata({ data: "json, name=database" })
  database: Meta23;

  @Metadata({ data: "json, name=datasource_type" })
  datasourceType?: any;

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

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=is_sqllab_view" })
  isSqllabView?: boolean;

  @Metadata({ data: "json, name=main_dttm_col" })
  mainDttmCol?: string;

  @Metadata({ data: "json, name=metrics" })
  metrics: Meta25;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=owners" })
  owners?: Meta24;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=sql" })
  sql?: string;

  @Metadata({ data: "json, name=table_name" })
  tableName: string;

  @Metadata({ data: "json, name=template_params" })
  templateParams?: string;

  @Metadata({ data: "json, name=url" })
  url?: any;
}
