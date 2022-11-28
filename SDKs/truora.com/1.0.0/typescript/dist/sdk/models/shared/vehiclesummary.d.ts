import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the summary of a vehicle background check
**/
export declare class VehicleSummary extends SpeakeasyBase {
    capacity?: number;
    color?: string;
    licensePlate?: string;
    manufacturer?: string;
    model?: string;
    numberOfDoors?: number;
    obligatoryInsuranceExpirationDate?: Date;
    obligatoryInsuranceStatus?: string;
    serviceType?: string;
    vehicleCategory?: string;
    vehicleId?: string;
    vehicleType?: string;
    year?: number;
}
