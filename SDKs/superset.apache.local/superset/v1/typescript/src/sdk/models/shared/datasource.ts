import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DatasourceDatasourceTypeEnum {
    Druid = "druid",
    Table = "table",
    View = "view"
}


export class Datasource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database_name" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=datasource_name" })
  datasourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=datasource_type" })
  datasourceType: DatasourceDatasourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;
}
