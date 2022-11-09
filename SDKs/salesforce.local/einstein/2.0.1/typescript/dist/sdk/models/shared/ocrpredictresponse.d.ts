import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OcrResult } from "./ocrresult";
export declare class OcrPredictResponse extends SpeakeasyBase {
    object?: string;
    probabilities?: OcrResult[];
    sampleId?: string;
    task?: string;
}
