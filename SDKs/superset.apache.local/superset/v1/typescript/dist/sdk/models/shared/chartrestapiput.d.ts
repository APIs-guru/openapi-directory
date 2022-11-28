import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ChartRestApiPutDatasourceTypeEnum {
    Druid = "druid",
    Table = "table",
    View = "view"
}
export declare class ChartRestApiPut extends SpeakeasyBase {
    cacheTimeout?: number;
    dashboards?: number[];
    datasourceId?: number;
    datasourceType?: ChartRestApiPutDatasourceTypeEnum;
    description?: string;
    owners?: number[];
    params?: string;
    queryContext?: string;
    sliceName?: string;
    vizType?: string;
}
