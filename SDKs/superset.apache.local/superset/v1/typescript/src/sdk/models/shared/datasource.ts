import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DatasourceDatasourceTypeEnum {
    Druid = "druid"
,    Table = "table"
,    View = "view"
}


export class Datasource extends SpeakeasyBase {
  @Metadata({ data: "json, name=database_name" })
  databaseName?: string;

  @Metadata({ data: "json, name=datasource_name" })
  datasourceName?: string;

  @Metadata({ data: "json, name=datasource_type" })
  datasourceType: DatasourceDatasourceTypeEnum;

  @Metadata({ data: "json, name=schema" })
  schema?: string;
}
