import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ImageClassificationRequest extends SpeakeasyBase {
    modelId: string;
    numResults?: number;
    sampleBase64Content?: string;
    sampleId?: string;
    sampleLocation?: string;
}
