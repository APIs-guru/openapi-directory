import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopPointArrivalDeparturesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StopPointArrivalDeparturesQueryParams extends SpeakeasyBase {
    lineIds: string[];
}
export declare class StopPointArrivalDeparturesRequest extends SpeakeasyBase {
    pathParams: StopPointArrivalDeparturesPathParams;
    queryParams: StopPointArrivalDeparturesQueryParams;
}
export declare class StopPointArrivalDeparturesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesArrivalDepartures?: shared.TflApiPresentationEntitiesArrivalDeparture[];
}
