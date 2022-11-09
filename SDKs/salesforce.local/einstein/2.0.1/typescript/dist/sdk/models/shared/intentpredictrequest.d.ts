import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class IntentPredictRequest extends SpeakeasyBase {
    document: string;
    modelId: string;
    numResults?: number;
    sampleId?: string;
}
