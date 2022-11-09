import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LabelResult } from "./labelresult";


export class IntentPredictResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=probabilities", elemType: shared.LabelResult })
  probabilities?: LabelResult[];

  @Metadata({ data: "json, name=sampleId" })
  sampleId?: string;
}
