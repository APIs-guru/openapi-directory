import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OcrMultipartRequestBodySampleContent extends SpeakeasyBase {
    content: Uint8Array;
    sampleContent: string;
}
export declare class OcrMultipartRequestBody extends SpeakeasyBase {
    modelId?: string;
    sampleContent?: OcrMultipartRequestBodySampleContent;
    sampleId?: string;
    sampleLocation?: string;
    task?: string;
}
export declare class OcrMultipartSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class OcrMultipartRequest extends SpeakeasyBase {
    request?: OcrMultipartRequestBody;
    security: OcrMultipartSecurity;
}
export declare class OcrMultipartResponse extends SpeakeasyBase {
    contentType: string;
    ocrPredictResponse?: shared.OcrPredictResponse;
    statusCode: number;
}
