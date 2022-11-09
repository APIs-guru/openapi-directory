import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DatasetMetricsPut extends SpeakeasyBase {
  @Metadata({ data: "json, name=d3format" })
  d3format?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expression" })
  expression: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=metric_name" })
  metricName: string;

  @Metadata({ data: "json, name=metric_type" })
  metricType?: string;

  @Metadata({ data: "json, name=warning_text" })
  warningText?: string;
}
