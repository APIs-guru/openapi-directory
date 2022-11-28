import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ChartDataDatasourceTypeEnum {
    Druid = "druid",
    Table = "table"
}
export declare class ChartDataDatasource extends SpeakeasyBase {
    id: number;
    type?: ChartDataDatasourceTypeEnum;
}
