import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OcrResult } from "./ocrresult";



export class OcrPredictResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=probabilities", elemType: OcrResult })
  probabilities?: OcrResult[];

  @SpeakeasyMetadata({ data: "json, name=sampleId" })
  sampleId?: string;

  @SpeakeasyMetadata({ data: "json, name=task" })
  task?: string;
}
