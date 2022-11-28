import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum StatusDataSetEnum {
    AffiliationsAndInsurances = "affiliations_and_insurances",
    AlertInMedia = "alert_in_media",
    Behavior = "behavior",
    BusinessBackground = "business_background",
    CriminalRecord = "criminal_record",
    DrivingLicenses = "driving_licenses",
    InternationalBackground = "international_background",
    LegalBackground = "legal_background",
    PersonalIdentity = "personal_identity",
    ProfessionalBackground = "professional_background",
    TrafficFines = "traffic_fines",
    VehicleInformation = "vehicle_information",
    VehiclePermits = "vehicle_permits",
    TaxesAndFinances = "taxes_and_finances"
}


// Status
/** 
 * Represents the status of databases used to generate background checks
**/
export class Status extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data_set" })
  dataSet?: StatusDataSetEnum;

  @SpeakeasyMetadata({ data: "json, name=database_id" })
  databaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=database_name" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_inputs" })
  invalidInputs?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: any;
}
