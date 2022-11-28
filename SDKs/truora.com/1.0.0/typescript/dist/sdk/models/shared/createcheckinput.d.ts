import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateCheckInputCountryEnum {
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
export declare enum CreateCheckInputRegionEnum {
    Df = "DF",
    Ac = "AC",
    Al = "AL",
    Ap = "AP",
    Am = "AM",
    Ba = "BA",
    Ce = "CE",
    Es = "ES",
    Go = "GO",
    Ma = "MA",
    Mt = "MT",
    Ms = "MS",
    Mg = "MG",
    Pa = "PA",
    Pb = "PB",
    Pr = "PR",
    Pe = "PE",
    Pi = "PI",
    Rj = "RJ",
    Rn = "RN",
    Rs = "RS",
    Ro = "RO",
    Rr = "RR",
    Sc = "SC",
    Sp = "SP",
    Se = "SE",
    To = "TO"
}
export declare enum CreateCheckInputTypeEnum {
    Person = "person",
    Vehicle = "vehicle",
    Company = "company",
    CustomTypeName = "custom_type_name"
}
/**
 * Represents paramaters required to create a background check
**/
export declare class CreateCheckInput extends SpeakeasyBase {
    birthCertificate?: string;
    companyName?: string;
    country: CreateCheckInputCountryEnum;
    dateOfBirth?: Date;
    diplomaticId?: string;
    driverLicense?: string;
    escrow?: string;
    firstName?: string;
    forceCreation?: boolean;
    foreignId?: string;
    issueDate?: Date;
    lastName?: string;
    licensePlate?: string;
    nationalId?: string;
    nativeCountry?: string;
    ownerDocumentId?: string;
    ownerDocumentType?: string;
    passport?: string;
    paymentDate?: Date;
    pep?: string;
    phoneNumber?: string;
    professionalCard?: string;
    ptp?: string;
    region?: CreateCheckInputRegionEnum;
    reportId?: string;
    stateId?: string;
    taxId?: string;
    type: CreateCheckInputTypeEnum;
    userAuthorized?: boolean;
    vehicleId?: string;
    verificationCode?: string;
    watch?: string;
}
