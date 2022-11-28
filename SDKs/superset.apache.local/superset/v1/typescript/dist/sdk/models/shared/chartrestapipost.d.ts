import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ChartRestApiPostDatasourceTypeEnum {
    Druid = "druid",
    Table = "table",
    View = "view"
}
export declare class ChartRestApiPost extends SpeakeasyBase {
    cacheTimeout?: number;
    dashboards?: number[];
    datasourceId: number;
    datasourceName?: string;
    datasourceType: ChartRestApiPostDatasourceTypeEnum;
    description?: string;
    owners?: number[];
    params?: string;
    queryContext?: string;
    sliceName: string;
    vizType?: string;
}
