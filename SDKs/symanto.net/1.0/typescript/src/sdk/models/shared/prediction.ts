import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Prediction extends SpeakeasyBase {
  @Metadata({ data: "json, name=prediction" })
  prediction: string;

  @Metadata({ data: "json, name=probability" })
  probability: number;
}
