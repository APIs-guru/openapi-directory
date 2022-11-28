import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateCheckInputCountryEnum {
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

export enum CreateCheckInputRegionEnum {
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

export enum CreateCheckInputTypeEnum {
    Person = "person",
    Vehicle = "vehicle",
    Company = "company",
    CustomTypeName = "custom_type_name"
}


// CreateCheckInput
/** 
 * Represents paramaters required to create a background check
**/
export class CreateCheckInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=birth_certificate;" })
  birthCertificate?: string;

  @SpeakeasyMetadata({ data: "form, name=company_name;" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "form, name=country;" })
  country: CreateCheckInputCountryEnum;

  @SpeakeasyMetadata({ data: "form, name=date_of_birth;" })
  dateOfBirth?: Date;

  @SpeakeasyMetadata({ data: "form, name=diplomatic_id;" })
  diplomaticId?: string;

  @SpeakeasyMetadata({ data: "form, name=driver_license;" })
  driverLicense?: string;

  @SpeakeasyMetadata({ data: "form, name=escrow;" })
  escrow?: string;

  @SpeakeasyMetadata({ data: "form, name=first_name;" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "form, name=force_creation;" })
  forceCreation?: boolean;

  @SpeakeasyMetadata({ data: "form, name=foreign_id;" })
  foreignId?: string;

  @SpeakeasyMetadata({ data: "form, name=issue_date;" })
  issueDate?: Date;

  @SpeakeasyMetadata({ data: "form, name=last_name;" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "form, name=license_plate;" })
  licensePlate?: string;

  @SpeakeasyMetadata({ data: "form, name=national_id;" })
  nationalId?: string;

  @SpeakeasyMetadata({ data: "form, name=native_country;" })
  nativeCountry?: string;

  @SpeakeasyMetadata({ data: "form, name=owner_document_id;" })
  ownerDocumentId?: string;

  @SpeakeasyMetadata({ data: "form, name=owner_document_type;" })
  ownerDocumentType?: string;

  @SpeakeasyMetadata({ data: "form, name=passport;" })
  passport?: string;

  @SpeakeasyMetadata({ data: "form, name=payment_date;" })
  paymentDate?: Date;

  @SpeakeasyMetadata({ data: "form, name=pep;" })
  pep?: string;

  @SpeakeasyMetadata({ data: "form, name=phone_number;" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "form, name=professional_card;" })
  professionalCard?: string;

  @SpeakeasyMetadata({ data: "form, name=ptp;" })
  ptp?: string;

  @SpeakeasyMetadata({ data: "form, name=region;" })
  region?: CreateCheckInputRegionEnum;

  @SpeakeasyMetadata({ data: "form, name=report_id;" })
  reportId?: string;

  @SpeakeasyMetadata({ data: "form, name=state_id;" })
  stateId?: string;

  @SpeakeasyMetadata({ data: "form, name=tax_id;" })
  taxId?: string;

  @SpeakeasyMetadata({ data: "form, name=type;" })
  type: CreateCheckInputTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=user_authorized;" })
  userAuthorized?: boolean;

  @SpeakeasyMetadata({ data: "form, name=vehicle_id;" })
  vehicleId?: string;

  @SpeakeasyMetadata({ data: "form, name=verification_code;" })
  verificationCode?: string;

  @SpeakeasyMetadata({ data: "form, name=watch;" })
  watch?: string;
}
