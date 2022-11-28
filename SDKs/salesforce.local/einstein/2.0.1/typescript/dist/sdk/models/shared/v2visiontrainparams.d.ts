import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON that contains parameters that specify how the model is created
**/
export declare class V2VisionTrainParams extends SpeakeasyBase {
    trainSplitRatio?: number;
    withFeedback?: boolean;
    withGlobalDatasetId?: number;
}
