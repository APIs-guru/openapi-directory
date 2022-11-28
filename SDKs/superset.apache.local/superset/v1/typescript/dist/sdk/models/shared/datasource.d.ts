import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DatasourceDatasourceTypeEnum {
    Druid = "druid",
    Table = "table",
    View = "view"
}
export declare class Datasource extends SpeakeasyBase {
    databaseName?: string;
    datasourceName?: string;
    datasourceType: DatasourceDatasourceTypeEnum;
    schema?: string;
}
