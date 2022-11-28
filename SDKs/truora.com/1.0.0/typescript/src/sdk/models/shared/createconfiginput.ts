import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateConfigInputCountryEnum {
    All = "ALL",
    Br = "BR",
    Cl = "CL",
    Co = "CO",
    Cr = "CR",
    Ec = "EC",
    Mx = "MX",
    Pe = "PE",
    Ar = "AR"
}


// CreateConfigInput
/** 
 * Represents paramaters required to create a score configuration
**/
export class CreateConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=country;" })
  country: CreateConfigInputCountryEnum;

  @SpeakeasyMetadata({ data: "form, name=dataset_affiliations_and_insurances;" })
  datasetAffiliationsAndInsurances?: number;

  @SpeakeasyMetadata({ data: "form, name=dataset_alert_in_media;" })
  datasetAlertInMedia?: number;

  @SpeakeasyMetadata({ data: "form, name=dataset_business_background;" })
  datasetBusinessBackground?: number;

  @SpeakeasyMetadata({ data: "form, name=dataset_criminal_record;" })
  datasetCriminalRecord?: number;

  @SpeakeasyMetadata({ data: "form, name=dataset_driving_licenses;" })
  datasetDrivingLicenses?: number;

  @SpeakeasyMetadata({ data: "form, name=dataset_international_background;" })
  datasetInternationalBackground?: number;

  @SpeakeasyMetadata({ data: "form, name=dataset_legal_background;" })
  datasetLegalBackground?: number;

  @SpeakeasyMetadata({ data: "form, name=dataset_personal_identity;" })
  datasetPersonalIdentity?: number;

  @SpeakeasyMetadata({ data: "form, name=dataset_professional_background;" })
  datasetProfessionalBackground?: number;

  @SpeakeasyMetadata({ data: "form, name=dataset_taxes_and_finances;" })
  datasetTaxesAndFinances?: number;

  @SpeakeasyMetadata({ data: "form, name=dataset_traffic_fines;" })
  datasetTrafficFines?: number;

  @SpeakeasyMetadata({ data: "form, name=dataset_vehicle_information;" })
  datasetVehicleInformation?: number;

  @SpeakeasyMetadata({ data: "form, name=dataset_vehicle_permits;" })
  datasetVehiclePermits?: number;

  @SpeakeasyMetadata({ data: "form, name=type;" })
  type: string;
}
