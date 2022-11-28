import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PatientWaitTimeServiceEnum {
    Audiology = "Audiology",
    Cardiology = "Cardiology",
    CaregiverSupport = "CaregiverSupport",
    Covid19Vaccine = "Covid19Vaccine",
    DentalServices = "DentalServices",
    Dermatology = "Dermatology",
    EmergencyCare = "EmergencyCare",
    Gastroenterology = "Gastroenterology",
    Gynecology = "Gynecology",
    MentalHealthCare = "MentalHealthCare",
    Ophthalmology = "Ophthalmology",
    Optometry = "Optometry",
    Orthopedics = "Orthopedics",
    Nutrition = "Nutrition",
    Podiatry = "Podiatry",
    PrimaryCare = "PrimaryCare",
    SpecialtyCare = "SpecialtyCare",
    UrgentCare = "UrgentCare",
    Urology = "Urology",
    WomensHealth = "WomensHealth"
}


// PatientWaitTime
/** 
 * Expected wait times for new and established patients for a given health care service
**/
export class PatientWaitTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=established" })
  established?: number;

  @SpeakeasyMetadata({ data: "json, name=new" })
  new?: number;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service: PatientWaitTimeServiceEnum;
}
