import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelResult } from "./labelresult";



export class ImageClassificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=probabilities", elemType: LabelResult })
  probabilities?: LabelResult[];

  @SpeakeasyMetadata({ data: "json, name=sampleId" })
  sampleId?: string;
}
