import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopPointGetPathParams extends SpeakeasyBase {
    ids: string[];
}
export declare class StopPointGetQueryParams extends SpeakeasyBase {
    includeCrowdingData?: boolean;
}
export declare class StopPointGetRequest extends SpeakeasyBase {
    pathParams: StopPointGetPathParams;
    queryParams: StopPointGetQueryParams;
}
export declare class StopPointGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
