import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PublishEventVideosPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PublishEventVideosHeaders extends SpeakeasyBase {
    tmpsCorrelationId: string;
}
export declare class PublishEventVideosRequest extends SpeakeasyBase {
    pathParams: PublishEventVideosPathParams;
    headers: PublishEventVideosHeaders;
    request: shared.Video;
}
export declare class PublishEventVideosResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
