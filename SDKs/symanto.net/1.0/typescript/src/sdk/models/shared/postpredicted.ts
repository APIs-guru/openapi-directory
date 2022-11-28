import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";



export class PostPredicted extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=predictions", elemType: Prediction })
  predictions: Prediction[];
}
