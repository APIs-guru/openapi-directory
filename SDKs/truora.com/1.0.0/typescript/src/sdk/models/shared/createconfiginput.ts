import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreateConfigInputCountryEnum {
    All = "ALL"
,    Br = "BR"
,    Cl = "CL"
,    Co = "CO"
,    Cr = "CR"
,    Ec = "EC"
,    Mx = "MX"
,    Pe = "PE"
,    Ar = "AR"
}


// CreateConfigInput
/** 
 * Represents paramaters required to create a score configuration
**/
export class CreateConfigInput extends SpeakeasyBase {
  @Metadata({ data: "form, name=country;" })
  country: CreateConfigInputCountryEnum;

  @Metadata({ data: "form, name=dataset_affiliations_and_insurances;" })
  datasetAffiliationsAndInsurances?: number;

  @Metadata({ data: "form, name=dataset_alert_in_media;" })
  datasetAlertInMedia?: number;

  @Metadata({ data: "form, name=dataset_business_background;" })
  datasetBusinessBackground?: number;

  @Metadata({ data: "form, name=dataset_criminal_record;" })
  datasetCriminalRecord?: number;

  @Metadata({ data: "form, name=dataset_driving_licenses;" })
  datasetDrivingLicenses?: number;

  @Metadata({ data: "form, name=dataset_international_background;" })
  datasetInternationalBackground?: number;

  @Metadata({ data: "form, name=dataset_legal_background;" })
  datasetLegalBackground?: number;

  @Metadata({ data: "form, name=dataset_personal_identity;" })
  datasetPersonalIdentity?: number;

  @Metadata({ data: "form, name=dataset_professional_background;" })
  datasetProfessionalBackground?: number;

  @Metadata({ data: "form, name=dataset_taxes_and_finances;" })
  datasetTaxesAndFinances?: number;

  @Metadata({ data: "form, name=dataset_traffic_fines;" })
  datasetTrafficFines?: number;

  @Metadata({ data: "form, name=dataset_vehicle_information;" })
  datasetVehicleInformation?: number;

  @Metadata({ data: "form, name=dataset_vehicle_permits;" })
  datasetVehiclePermits?: number;

  @Metadata({ data: "form, name=type;" })
  type: string;
}
