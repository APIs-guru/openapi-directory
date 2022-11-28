import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
/**
 * label
**/
export declare class DetectionResult extends SpeakeasyBase {
    boundingBox?: BoundingBox;
    label?: string;
    probability?: number;
}
