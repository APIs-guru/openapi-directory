import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PredictionErrorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=object" })
  object?: string;
}
