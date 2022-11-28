import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopPointGetTaxiRanksByIdsPathParams extends SpeakeasyBase {
    stopPointId: string;
}
export declare class StopPointGetTaxiRanksByIdsRequest extends SpeakeasyBase {
    pathParams: StopPointGetTaxiRanksByIdsPathParams;
}
export declare class StopPointGetTaxiRanksByIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
