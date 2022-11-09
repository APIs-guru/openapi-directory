import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Prediction } from "./prediction";


export class PostPredicted extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=predictions", elemType: shared.Prediction })
  predictions: Prediction[];
}
