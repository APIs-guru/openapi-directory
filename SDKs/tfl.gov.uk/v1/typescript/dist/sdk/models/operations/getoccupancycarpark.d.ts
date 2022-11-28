import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOccupancyCarParkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesCarParkOccupancies?: shared.TflApiPresentationEntitiesCarParkOccupancy[];
}
