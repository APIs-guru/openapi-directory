import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VehicleGetEmissionsSurchargeComplianceQueryParams extends SpeakeasyBase {
    vrm: string;
}
export declare class VehicleGetEmissionsSurchargeComplianceRequest extends SpeakeasyBase {
    queryParams: VehicleGetEmissionsSurchargeComplianceQueryParams;
}
export declare class VehicleGetEmissionsSurchargeComplianceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesVehicleMatch?: shared.TflApiPresentationEntitiesVehicleMatch;
}
