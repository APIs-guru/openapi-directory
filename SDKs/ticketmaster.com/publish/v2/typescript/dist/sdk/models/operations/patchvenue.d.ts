import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchVenuePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchVenueHeaders extends SpeakeasyBase {
    tmpsCorrelationId: string;
}
export declare class PatchVenueRequest extends SpeakeasyBase {
    pathParams: PatchVenuePathParams;
    headers: PatchVenueHeaders;
    request: shared.AugmentationData;
}
export declare class PatchVenueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
