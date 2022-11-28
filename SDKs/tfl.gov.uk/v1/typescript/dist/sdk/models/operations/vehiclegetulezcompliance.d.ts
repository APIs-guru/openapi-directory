import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VehicleGetUlezComplianceQueryParams extends SpeakeasyBase {
    vrm: string;
}
export declare class VehicleGetUlezComplianceRequest extends SpeakeasyBase {
    queryParams: VehicleGetUlezComplianceQueryParams;
}
export declare class VehicleGetUlezComplianceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesVehicleMatch?: shared.TflApiPresentationEntitiesVehicleMatch;
}
