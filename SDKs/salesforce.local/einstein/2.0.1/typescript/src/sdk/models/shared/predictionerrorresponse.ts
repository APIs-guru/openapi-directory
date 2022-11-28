import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PredictionErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;
}
