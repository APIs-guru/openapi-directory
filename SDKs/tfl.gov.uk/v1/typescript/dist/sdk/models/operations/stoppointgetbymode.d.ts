import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopPointGetByModePathParams extends SpeakeasyBase {
    modes: string[];
}
export declare class StopPointGetByModeQueryParams extends SpeakeasyBase {
    page?: number;
}
export declare class StopPointGetByModeRequest extends SpeakeasyBase {
    pathParams: StopPointGetByModePathParams;
    queryParams: StopPointGetByModeQueryParams;
}
export declare class StopPointGetByModeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesStopPointsResponse?: shared.TflApiPresentationEntitiesStopPointsResponse;
}
