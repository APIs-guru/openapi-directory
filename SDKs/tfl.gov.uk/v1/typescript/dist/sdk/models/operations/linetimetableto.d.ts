import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineTimetableToPathParams extends SpeakeasyBase {
    fromStopPointId: string;
    id: string;
    toStopPointId: string;
}
export declare class LineTimetableToRequest extends SpeakeasyBase {
    pathParams: LineTimetableToPathParams;
}
export declare class LineTimetableToResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesTimetableResponse?: shared.TflApiPresentationEntitiesTimetableResponse;
}
