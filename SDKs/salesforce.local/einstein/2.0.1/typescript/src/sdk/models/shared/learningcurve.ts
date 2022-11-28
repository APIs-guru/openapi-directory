import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LearningCurve extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=epoch" })
  epoch?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=epochResults" })
  epochResults?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=metricsData" })
  metricsData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;
}
