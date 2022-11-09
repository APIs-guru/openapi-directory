import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Attributes } from "./attributes";
import { BoundingBox } from "./boundingbox";
/**
 * Array of probabilities for the prediction.
**/
export declare class OcrResult extends SpeakeasyBase {
    attributes?: Attributes;
    boundingBox?: BoundingBox;
    label?: string;
    probability?: number;
}
