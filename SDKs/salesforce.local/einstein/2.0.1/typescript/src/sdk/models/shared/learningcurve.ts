import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LearningCurve extends SpeakeasyBase {
  @Metadata({ data: "json, name=epoch" })
  epoch?: Map<string, any>;

  @Metadata({ data: "json, name=epochResults" })
  epochResults?: Map<string, any>;

  @Metadata({ data: "json, name=metricsData" })
  metricsData?: Map<string, any>;

  @Metadata({ data: "json, name=object" })
  object?: string;
}
