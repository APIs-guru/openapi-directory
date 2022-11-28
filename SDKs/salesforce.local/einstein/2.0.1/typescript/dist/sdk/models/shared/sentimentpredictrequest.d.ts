import { SpeakeasyBase } from "../../../internal/utils";
export declare class SentimentPredictRequest extends SpeakeasyBase {
    document: string;
    modelId: string;
    numResults?: number;
    sampleId?: string;
}
