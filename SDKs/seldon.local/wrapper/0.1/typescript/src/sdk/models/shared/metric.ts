import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricTypeEnum } from "./metrictypeenum";



export class Metric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MetricTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
