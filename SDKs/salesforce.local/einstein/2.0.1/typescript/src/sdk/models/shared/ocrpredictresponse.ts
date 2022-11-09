import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OcrResult } from "./ocrresult";


export class OcrPredictResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=probabilities", elemType: shared.OcrResult })
  probabilities?: OcrResult[];

  @Metadata({ data: "json, name=sampleId" })
  sampleId?: string;

  @Metadata({ data: "json, name=task" })
  task?: string;
}
