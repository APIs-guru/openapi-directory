import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ChartRestApiPostDatasourceTypeEnum {
    Druid = "druid"
,    Table = "table"
,    View = "view"
}


export class ChartRestApiPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=cache_timeout" })
  cacheTimeout?: number;

  @Metadata({ data: "json, name=dashboards" })
  dashboards?: number[];

  @Metadata({ data: "json, name=datasource_id" })
  datasourceId: number;

  @Metadata({ data: "json, name=datasource_name" })
  datasourceName?: string;

  @Metadata({ data: "json, name=datasource_type" })
  datasourceType: ChartRestApiPostDatasourceTypeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=owners" })
  owners?: number[];

  @Metadata({ data: "json, name=params" })
  params?: string;

  @Metadata({ data: "json, name=query_context" })
  queryContext?: string;

  @Metadata({ data: "json, name=slice_name" })
  sliceName: string;

  @Metadata({ data: "json, name=viz_type" })
  vizType?: string;
}
