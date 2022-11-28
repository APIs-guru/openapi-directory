import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreDetail } from "./scoredetail";
export declare enum ScoreDataSetEnum {
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
export declare enum ScoreResultEnum {
    Pending = "pending",
    Found = "found",
    NotFound = "not_found",
    Error = "error",
    Delayed = "delayed",
    Ignored = "ignored"
}
/**
 * Represents dataset scores. A score is a number between 0 and 1 that indicates how trustworthy the person, vehicle, or company is accordig to the result of the background check. Severity represents the risk associated with each dataset according to the background check. Keep in mind that you should use either the score or the severity but not both
**/
export declare class Score extends SpeakeasyBase {
    byId: ScoreDetail;
    byName: ScoreDetail;
    dataSet: ScoreDataSetEnum;
    result?: ScoreResultEnum;
    score: number;
    severity: any;
}
