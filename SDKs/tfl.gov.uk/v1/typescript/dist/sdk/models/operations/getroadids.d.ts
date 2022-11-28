import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRoadIdsPathParams extends SpeakeasyBase {
    ids: string[];
}
export declare class GetRoadIdsRequest extends SpeakeasyBase {
    pathParams: GetRoadIdsPathParams;
}
export declare class GetRoadIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesRoadCorridors?: shared.TflApiPresentationEntitiesRoadCorridor[];
}
