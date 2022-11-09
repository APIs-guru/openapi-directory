import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VehicleSummary
/** 
 * Represents the summary of a vehicle background check
**/
export class VehicleSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacity" })
  capacity?: number;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=license_plate" })
  licensePlate?: string;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=number_of_doors" })
  numberOfDoors?: number;

  @Metadata({ data: "json, name=obligatory_insurance_expiration_date" })
  obligatoryInsuranceExpirationDate?: Date;

  @Metadata({ data: "json, name=obligatory_insurance_status" })
  obligatoryInsuranceStatus?: string;

  @Metadata({ data: "json, name=service_type" })
  serviceType?: string;

  @Metadata({ data: "json, name=vehicle_category" })
  vehicleCategory?: string;

  @Metadata({ data: "json, name=vehicle_id" })
  vehicleId?: string;

  @Metadata({ data: "json, name=vehicle_type" })
  vehicleType?: string;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
