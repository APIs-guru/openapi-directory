import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LearningCurve } from "./learningcurve";


export class LearningCurveList extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.LearningCurve })
  data?: LearningCurve[];

  @Metadata({ data: "json, name=object" })
  object?: string;
}
