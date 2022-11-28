import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta22 } from "./meta22";
import { Meta23 } from "./meta23";
import { Meta25 } from "./meta25";
import { Meta24 } from "./meta24";



export class DatasetRestApiGet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cache_timeout" })
  cacheTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns: Meta22;

  @SpeakeasyMetadata({ data: "json, name=database" })
  database: Meta23;

  @SpeakeasyMetadata({ data: "json, name=datasource_type" })
  datasourceType?: any;

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

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_sqllab_view" })
  isSqllabView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=main_dttm_col" })
  mainDttmCol?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: Meta25;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=owners" })
  owners?: Meta24;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;

  @SpeakeasyMetadata({ data: "json, name=table_name" })
  tableName: string;

  @SpeakeasyMetadata({ data: "json, name=template_params" })
  templateParams?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: any;
}
