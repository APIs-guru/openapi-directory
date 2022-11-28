import { SpeakeasyBase } from "../../../internal/utils";
export declare enum StatusDataSetEnum {
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
/**
 * Represents the status of databases used to generate background checks
**/
export declare class Status extends SpeakeasyBase {
    dataSet?: StatusDataSetEnum;
    databaseId?: string;
    databaseName?: string;
    invalidInputs?: string[];
    status?: any;
}
