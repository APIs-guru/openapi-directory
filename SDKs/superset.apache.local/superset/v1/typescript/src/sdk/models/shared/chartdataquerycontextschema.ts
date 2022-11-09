import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChartDataDatasource } from "./chartdatadatasource";
import { ChartDataQueryObject } from "./chartdataqueryobject";


export class ChartDataQueryContextSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasource" })
  datasource?: ChartDataDatasource;

  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=queries", elemType: shared.ChartDataQueryObject })
  queries?: ChartDataQueryObject[];

  @Metadata({ data: "json, name=result_format" })
  resultFormat?: any;

  @Metadata({ data: "json, name=result_type" })
  resultType?: any;
}
