import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PublishAttractionVideosPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PublishAttractionVideosHeaders extends SpeakeasyBase {
    tmpsCorrelationId: string;
}
export declare class PublishAttractionVideosRequest extends SpeakeasyBase {
    pathParams: PublishAttractionVideosPathParams;
    headers: PublishAttractionVideosHeaders;
    request: shared.Video;
}
export declare class PublishAttractionVideosResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
