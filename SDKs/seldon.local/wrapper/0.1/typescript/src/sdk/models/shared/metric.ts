import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricTypeEnum } from "./metrictypeenum";


export class Metric extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=type" })
  type?: MetricTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
