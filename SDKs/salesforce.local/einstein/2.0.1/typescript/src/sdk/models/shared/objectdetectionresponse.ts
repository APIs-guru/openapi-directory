import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DetectionResult } from "./detectionresult";


export class ObjectDetectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=probabilities", elemType: shared.DetectionResult })
  probabilities?: DetectionResult[];

  @Metadata({ data: "json, name=sampleId" })
  sampleId?: string;
}
