import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PublishVenueHeaders extends SpeakeasyBase {
    tmpsCorrelationId: string;
}
export declare class PublishVenueRequest extends SpeakeasyBase {
    headers: PublishVenueHeaders;
    request: shared.Venue;
}
export declare class PublishVenueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
