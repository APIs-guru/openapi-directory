import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChartDataResponseResult } from "./chartdataresponseresult";



export class ChartDataResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result", elemType: ChartDataResponseResult })
  result?: ChartDataResponseResult[];
}
