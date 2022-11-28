import { SpeakeasyBase } from "../../../internal/utils";
import { DetectionResult } from "./detectionresult";
export declare class ObjectDetectionResponse extends SpeakeasyBase {
    object?: string;
    probabilities?: DetectionResult[];
    sampleId?: string;
}
