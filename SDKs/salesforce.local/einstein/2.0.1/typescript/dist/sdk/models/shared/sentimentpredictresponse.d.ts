import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LabelResult } from "./labelresult";
export declare class SentimentPredictResponse extends SpeakeasyBase {
    object?: string;
    probabilities?: LabelResult[];
    sampleId?: string;
}
