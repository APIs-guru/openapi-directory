import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChartRestApiPutDatasourceTypeEnum {
    Druid = "druid",
    Table = "table",
    View = "view"
}


export class ChartRestApiPut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cache_timeout" })
  cacheTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=dashboards" })
  dashboards?: number[];

  @SpeakeasyMetadata({ data: "json, name=datasource_id" })
  datasourceId?: number;

  @SpeakeasyMetadata({ data: "json, name=datasource_type" })
  datasourceType?: ChartRestApiPutDatasourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=owners" })
  owners?: number[];

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: string;

  @SpeakeasyMetadata({ data: "json, name=query_context" })
  queryContext?: string;

  @SpeakeasyMetadata({ data: "json, name=slice_name" })
  sliceName?: string;

  @SpeakeasyMetadata({ data: "json, name=viz_type" })
  vizType?: string;
}
