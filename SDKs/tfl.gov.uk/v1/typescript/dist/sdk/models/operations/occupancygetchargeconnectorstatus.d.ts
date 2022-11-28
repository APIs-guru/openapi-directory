import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OccupancyGetChargeConnectorStatusPathParams extends SpeakeasyBase {
    ids: string[];
}
export declare class OccupancyGetChargeConnectorStatusRequest extends SpeakeasyBase {
    pathParams: OccupancyGetChargeConnectorStatusPathParams;
}
export declare class OccupancyGetChargeConnectorStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesChargeConnectorOccupancies?: shared.TflApiPresentationEntitiesChargeConnectorOccupancy[];
}
