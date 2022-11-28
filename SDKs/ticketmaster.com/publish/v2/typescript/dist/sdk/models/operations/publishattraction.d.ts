import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PublishAttractionHeaders extends SpeakeasyBase {
    tmpsCorrelationId: string;
}
export declare class PublishAttractionRequest extends SpeakeasyBase {
    headers: PublishAttractionHeaders;
    request: shared.Attraction;
}
export declare class PublishAttractionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
