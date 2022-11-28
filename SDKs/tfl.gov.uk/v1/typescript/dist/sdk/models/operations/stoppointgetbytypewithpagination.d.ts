import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopPointGetByTypeWithPaginationPathParams extends SpeakeasyBase {
    page: number;
    types: string[];
}
export declare class StopPointGetByTypeWithPaginationRequest extends SpeakeasyBase {
    pathParams: StopPointGetByTypeWithPaginationPathParams;
}
export declare class StopPointGetByTypeWithPaginationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
