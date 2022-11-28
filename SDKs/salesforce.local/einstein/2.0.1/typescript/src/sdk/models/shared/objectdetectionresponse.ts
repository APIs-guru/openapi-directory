import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectionResult } from "./detectionresult";



export class ObjectDetectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=probabilities", elemType: DetectionResult })
  probabilities?: DetectionResult[];

  @SpeakeasyMetadata({ data: "json, name=sampleId" })
  sampleId?: string;
}
