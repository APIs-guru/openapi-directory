import { SpeakeasyBase } from "../../../internal/utils";
import { ChartDataDatasource } from "./chartdatadatasource";
import { ChartDataQueryObject } from "./chartdataqueryobject";
export declare class ChartDataQueryContextSchema extends SpeakeasyBase {
    datasource?: ChartDataDatasource;
    force?: boolean;
    queries?: ChartDataQueryObject[];
    resultFormat?: any;
    resultType?: any;
}
