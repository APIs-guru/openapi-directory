import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LearningCurve } from "./learningcurve";



export class LearningCurveList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: LearningCurve })
  data?: LearningCurve[];

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;
}
