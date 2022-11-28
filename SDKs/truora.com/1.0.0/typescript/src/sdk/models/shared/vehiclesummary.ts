import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VehicleSummary
/** 
 * Represents the summary of a vehicle background check
**/
export class VehicleSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacity" })
  capacity?: number;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=license_plate" })
  licensePlate?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=number_of_doors" })
  numberOfDoors?: number;

  @SpeakeasyMetadata({ data: "json, name=obligatory_insurance_expiration_date" })
  obligatoryInsuranceExpirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=obligatory_insurance_status" })
  obligatoryInsuranceStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=service_type" })
  serviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=vehicle_category" })
  vehicleCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=vehicle_id" })
  vehicleId?: string;

  @SpeakeasyMetadata({ data: "json, name=vehicle_type" })
  vehicleType?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
