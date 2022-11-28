import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PublishEventHeaders extends SpeakeasyBase {
    tmpsCorrelationId: string;
}
export declare class PublishEventRequest extends SpeakeasyBase {
    headers: PublishEventHeaders;
    request: shared.Event;
}
export declare class PublishEventResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
