import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchAttractionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchAttractionHeaders extends SpeakeasyBase {
    tmpsCorrelationId: string;
}
export declare class PatchAttractionRequest extends SpeakeasyBase {
    pathParams: PatchAttractionPathParams;
    headers: PatchAttractionHeaders;
    request: shared.AugmentationData;
}
export declare class PatchAttractionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
