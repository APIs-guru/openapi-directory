import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChartDataDatasource } from "./chartdatadatasource";
import { ChartDataQueryObject } from "./chartdataqueryobject";



export class ChartDataQueryContextSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasource" })
  datasource?: ChartDataDatasource;

  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=queries", elemType: ChartDataQueryObject })
  queries?: ChartDataQueryObject[];

  @SpeakeasyMetadata({ data: "json, name=result_format" })
  resultFormat?: any;

  @SpeakeasyMetadata({ data: "json, name=result_type" })
  resultType?: any;
}
