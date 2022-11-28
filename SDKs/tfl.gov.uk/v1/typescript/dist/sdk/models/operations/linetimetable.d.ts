import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineTimetablePathParams extends SpeakeasyBase {
    fromStopPointId: string;
    id: string;
}
export declare class LineTimetableRequest extends SpeakeasyBase {
    pathParams: LineTimetablePathParams;
}
export declare class LineTimetableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesTimetableResponse?: shared.TflApiPresentationEntitiesTimetableResponse;
}
