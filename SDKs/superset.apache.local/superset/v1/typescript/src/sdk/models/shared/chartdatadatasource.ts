import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ChartDataDatasourceTypeEnum {
    Druid = "druid"
,    Table = "table"
}


export class ChartDataDatasource extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type?: ChartDataDatasourceTypeEnum;
}
