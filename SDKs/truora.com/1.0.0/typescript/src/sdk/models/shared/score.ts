import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScoreDetail } from "./scoredetail";
import { ScoreDetail } from "./scoredetail";

export enum ScoreDataSetEnum {
    AffiliationsAndInsurances = "affiliations_and_insurances"
,    AlertInMedia = "alert_in_media"
,    Behavior = "behavior"
,    BusinessBackground = "business_background"
,    CriminalRecord = "criminal_record"
,    DrivingLicenses = "driving_licenses"
,    InternationalBackground = "international_background"
,    LegalBackground = "legal_background"
,    PersonalIdentity = "personal_identity"
,    ProfessionalBackground = "professional_background"
,    TrafficFines = "traffic_fines"
,    VehicleInformation = "vehicle_information"
,    VehiclePermits = "vehicle_permits"
,    TaxesAndFinances = "taxes_and_finances"
}

export enum ScoreResultEnum {
    Pending = "pending"
,    Found = "found"
,    NotFound = "not_found"
,    Error = "error"
,    Delayed = "delayed"
,    Ignored = "ignored"
}


// Score
/** 
 * Represents dataset scores. A score is a number between 0 and 1 that indicates how trustworthy the person, vehicle, or company is accordig to the result of the background check. Severity represents the risk associated with each dataset according to the background check. Keep in mind that you should use either the score or the severity but not both
**/
export class Score extends SpeakeasyBase {
  @Metadata({ data: "json, name=by_id" })
  byId: ScoreDetail;

  @Metadata({ data: "json, name=by_name" })
  byName: ScoreDetail;

  @Metadata({ data: "json, name=data_set" })
  dataSet: ScoreDataSetEnum;

  @Metadata({ data: "json, name=result" })
  result?: ScoreResultEnum;

  @Metadata({ data: "json, name=score" })
  score: number;

  @Metadata({ data: "json, name=severity" })
  severity: any;
}
