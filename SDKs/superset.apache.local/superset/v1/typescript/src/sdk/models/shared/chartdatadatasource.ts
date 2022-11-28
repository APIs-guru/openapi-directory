import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChartDataDatasourceTypeEnum {
    Druid = "druid",
    Table = "table"
}


export class ChartDataDatasource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ChartDataDatasourceTypeEnum;
}
