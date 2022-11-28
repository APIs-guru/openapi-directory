import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateConfigInputCountryEnum {
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
/**
 * Represents paramaters required to create a score configuration
**/
export declare class CreateConfigInput extends SpeakeasyBase {
    country: CreateConfigInputCountryEnum;
    datasetAffiliationsAndInsurances?: number;
    datasetAlertInMedia?: number;
    datasetBusinessBackground?: number;
    datasetCriminalRecord?: number;
    datasetDrivingLicenses?: number;
    datasetInternationalBackground?: number;
    datasetLegalBackground?: number;
    datasetPersonalIdentity?: number;
    datasetProfessionalBackground?: number;
    datasetTaxesAndFinances?: number;
    datasetTrafficFines?: number;
    datasetVehicleInformation?: number;
    datasetVehiclePermits?: number;
    type: string;
}
