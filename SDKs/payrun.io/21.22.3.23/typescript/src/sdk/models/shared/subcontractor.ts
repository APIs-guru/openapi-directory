import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubContractorSubContractorAddress
/** 
 * The sub contractors' address
**/
export class SubContractorSubContractorAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=Address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=Address3" })
  address3?: string;

  @SpeakeasyMetadata({ data: "json, name=Address4" })
  address4?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=Postcode" })
  postcode?: string;
}


// SubContractorSubContractorBankAccount
/** 
 * The sub contractors' bank account
**/
export class SubContractorSubContractorBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=SortCode" })
  sortCode?: string;
}

export enum SubContractorSubContractorBusinessTypeEnum {
    SoleTrader = "SoleTrader",
    Company = "Company",
    Partnership = "Partnership",
    Trust = "Trust"
}

export enum SubContractorSubContractorPayFrequencyEnum {
    Monthly = "Monthly",
    Weekly = "Weekly"
}

export enum SubContractorSubContractorPaymentMethodEnum {
    NotSet = "NotSet",
    Cash = "Cash",
    Cheque = "Cheque",
    Bacs = "BACS",
    FasterPayments = "FasterPayments",
    Other = "Other"
}

export enum SubContractorSubContractorRegionEnum {
    NotSet = "NotSet",
    England = "England",
    Scotland = "Scotland",
    Wales = "Wales"
}

export enum SubContractorSubContractorTaxationStatusEnum {
    Unmatched = "Unmatched",
    Net = "Net",
    Gross = "Gross"
}

export enum SubContractorSubContractorTerritoryEnum {
    UnitedKingdom = "UnitedKingdom"
}


export class SubContractorSubContractor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: SubContractorSubContractorAddress;

  @SpeakeasyMetadata({ data: "json, name=BankAccount" })
  bankAccount?: SubContractorSubContractorBankAccount;

  @SpeakeasyMetadata({ data: "json, name=BusinessType" })
  businessType?: SubContractorSubContractorBusinessTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CompanyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=CompanyRegistrationNumber" })
  companyRegistrationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Deactivated" })
  deactivated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=Initials" })
  initials?: string;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=MetaData" })
  metaData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=MiddleName" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=NiNumber" })
  niNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=PartnershipName" })
  partnershipName?: string;

  @SpeakeasyMetadata({ data: "json, name=PartnershipUniqueTaxReference" })
  partnershipUniqueTaxReference?: string;

  @SpeakeasyMetadata({ data: "json, name=PayFrequency" })
  payFrequency?: SubContractorSubContractorPayFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=PaymentMethod" })
  paymentMethod?: SubContractorSubContractorPaymentMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: SubContractorSubContractorRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=Revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxationStatus" })
  taxationStatus?: SubContractorSubContractorTaxationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Telephone" })
  telephone?: string;

  @SpeakeasyMetadata({ data: "json, name=Territory" })
  territory?: SubContractorSubContractorTerritoryEnum;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=TradingName" })
  tradingName?: string;

  @SpeakeasyMetadata({ data: "json, name=UniqueTaxReference" })
  uniqueTaxReference?: string;

  @SpeakeasyMetadata({ data: "json, name=VatRegistered" })
  vatRegistered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=VatRegistrationNumber" })
  vatRegistrationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=VerificationDate" })
  verificationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=VerificationNumber" })
  verificationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=WorksNumber" })
  worksNumber?: string;
}


export class SubContractor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SubContractor" })
  subContractor?: SubContractorSubContractor;
}
