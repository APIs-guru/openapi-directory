import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Prediction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prediction" })
  prediction: string;

  @SpeakeasyMetadata({ data: "json, name=probability" })
  probability: number;
}
