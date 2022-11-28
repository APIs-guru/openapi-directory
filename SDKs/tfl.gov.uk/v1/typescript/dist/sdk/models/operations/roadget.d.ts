import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RoadGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesRoadCorridors?: shared.TflApiPresentationEntitiesRoadCorridor[];
}
