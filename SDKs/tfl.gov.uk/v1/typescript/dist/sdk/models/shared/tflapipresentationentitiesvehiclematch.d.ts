import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TflApiPresentationEntitiesVehicleMatchComplianceEnum {
    NotAvailable = "NotAvailable",
    NotCompliant = "NotCompliant",
    Compliant = "Compliant",
    Exempt = "Exempt"
}
export declare class TflApiPresentationEntitiesVehicleMatch extends SpeakeasyBase {
    colour?: string;
    compliance?: TflApiPresentationEntitiesVehicleMatchComplianceEnum;
    make?: string;
    model?: string;
    type?: string;
    vrm?: string;
}
