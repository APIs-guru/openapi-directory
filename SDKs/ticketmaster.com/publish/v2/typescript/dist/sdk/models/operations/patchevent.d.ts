import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchEventPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchEventHeaders extends SpeakeasyBase {
    tmpsCorrelationId: string;
}
export declare class PatchEventRequest extends SpeakeasyBase {
    pathParams: PatchEventPathParams;
    headers: PatchEventHeaders;
    request: shared.AugmentationData;
}
export declare class PatchEventResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
