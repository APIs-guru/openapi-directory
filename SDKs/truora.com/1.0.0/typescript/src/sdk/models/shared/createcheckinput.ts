import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreateCheckInputCountryEnum {
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

export enum CreateCheckInputRegionEnum {
    Df = "DF"
,    Ac = "AC"
,    Al = "AL"
,    Ap = "AP"
,    Am = "AM"
,    Ba = "BA"
,    Ce = "CE"
,    Es = "ES"
,    Go = "GO"
,    Ma = "MA"
,    Mt = "MT"
,    Ms = "MS"
,    Mg = "MG"
,    Pa = "PA"
,    Pb = "PB"
,    Pr = "PR"
,    Pe = "PE"
,    Pi = "PI"
,    Rj = "RJ"
,    Rn = "RN"
,    Rs = "RS"
,    Ro = "RO"
,    Rr = "RR"
,    Sc = "SC"
,    Sp = "SP"
,    Se = "SE"
,    To = "TO"
}

export enum CreateCheckInputTypeEnum {
    Person = "person"
,    Vehicle = "vehicle"
,    Company = "company"
,    CustomTypeName = "custom_type_name"
}


// CreateCheckInput
/** 
 * Represents paramaters required to create a background check
**/
export class CreateCheckInput extends SpeakeasyBase {
  @Metadata({ data: "form, name=birth_certificate;" })
  birthCertificate?: string;

  @Metadata({ data: "form, name=company_name;" })
  companyName?: string;

  @Metadata({ data: "form, name=country;" })
  country: CreateCheckInputCountryEnum;

  @Metadata({ data: "form, name=date_of_birth;" })
  dateOfBirth?: Date;

  @Metadata({ data: "form, name=diplomatic_id;" })
  diplomaticId?: string;

  @Metadata({ data: "form, name=driver_license;" })
  driverLicense?: string;

  @Metadata({ data: "form, name=escrow;" })
  escrow?: string;

  @Metadata({ data: "form, name=first_name;" })
  firstName?: string;

  @Metadata({ data: "form, name=force_creation;" })
  forceCreation?: boolean;

  @Metadata({ data: "form, name=foreign_id;" })
  foreignId?: string;

  @Metadata({ data: "form, name=issue_date;" })
  issueDate?: Date;

  @Metadata({ data: "form, name=last_name;" })
  lastName?: string;

  @Metadata({ data: "form, name=license_plate;" })
  licensePlate?: string;

  @Metadata({ data: "form, name=national_id;" })
  nationalId?: string;

  @Metadata({ data: "form, name=native_country;" })
  nativeCountry?: string;

  @Metadata({ data: "form, name=owner_document_id;" })
  ownerDocumentId?: string;

  @Metadata({ data: "form, name=owner_document_type;" })
  ownerDocumentType?: string;

  @Metadata({ data: "form, name=passport;" })
  passport?: string;

  @Metadata({ data: "form, name=payment_date;" })
  paymentDate?: Date;

  @Metadata({ data: "form, name=pep;" })
  pep?: string;

  @Metadata({ data: "form, name=phone_number;" })
  phoneNumber?: string;

  @Metadata({ data: "form, name=professional_card;" })
  professionalCard?: string;

  @Metadata({ data: "form, name=ptp;" })
  ptp?: string;

  @Metadata({ data: "form, name=region;" })
  region?: CreateCheckInputRegionEnum;

  @Metadata({ data: "form, name=report_id;" })
  reportId?: string;

  @Metadata({ data: "form, name=state_id;" })
  stateId?: string;

  @Metadata({ data: "form, name=tax_id;" })
  taxId?: string;

  @Metadata({ data: "form, name=type;" })
  type: CreateCheckInputTypeEnum;

  @Metadata({ data: "form, name=user_authorized;" })
  userAuthorized?: boolean;

  @Metadata({ data: "form, name=vehicle_id;" })
  vehicleId?: string;

  @Metadata({ data: "form, name=verification_code;" })
  verificationCode?: string;

  @Metadata({ data: "form, name=watch;" })
  watch?: string;
}
