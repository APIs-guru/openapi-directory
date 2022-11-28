import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DatasetMetricsPut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=d3format" })
  d3format?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=metric_name" })
  metricName: string;

  @SpeakeasyMetadata({ data: "json, name=metric_type" })
  metricType?: string;

  @SpeakeasyMetadata({ data: "json, name=warning_text" })
  warningText?: string;
}
